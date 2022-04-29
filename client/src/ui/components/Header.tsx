import {
  ComponentPropsWithoutRef,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  Box,
  Burger,
  Button,
  Center,
  Container,
  createStyles,
  Divider,
  Drawer,
  Space,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery, useWindowScroll } from "@mantine/hooks";
import { Logo } from "./Logo";
import { useLocation, useNavigate, useNavigationType } from "react-router-dom";
import { FaUniversity, FaBook, FaRocket } from "react-icons/fa";
import { UserContext } from "../../context/user";

interface stylesProps {
  y: number;
  height?: number;
}

const useStyles = createStyles((theme, { y, height }: stylesProps) => ({
  root: {
    position: "sticky",
    zIndex: 1000,
    top: 0,
    left: 0,
    right: 0,
  },

  inner: {
    display: "flex",
    flexDirection: "column",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    height: height || 65,
    boxShadow: y > 20 ? theme.shadows.sm : undefined,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 1,
    width: "100%",
  },

  children: {
    flexGrow: 1,
  },
  leftSide: {},
  rightSide: {
    marginLeft: 20,
  },
}));

export interface HeaderProps extends ComponentPropsWithoutRef<"div"> {
  height?: number;
  withBorder?: boolean;
  leftSide?: ReactNode;
  rightSide?: ReactNode;
  responsive?: boolean;
  borderSize?: "xs" | "sm" | "md" | "lg" | "xl";
}

export function Header({
  children,
  height,
  withBorder,
  leftSide,
  rightSide,
  responsive,
  borderSize,
  ...others
}: HeaderProps) {
  const [{ y }] = useWindowScroll();
  const { classes } = useStyles({ y, height });
  const { breakpoints } = useMantineTheme();
  const tablet = useMediaQuery(`(max-width:${breakpoints.sm}px)`);
  const [opened, setOpened] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpened(false);
  }, [tablet]);

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <Box className={classes.root}>
      <Box className={classes.inner}>
        <Container size="xl" className={classes.container} {...others}>
          {!!responsive && tablet && !pathname.startsWith("/courses") ? (
            <Burger
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[7]
                    : theme.colors.gray[2],
                "&:hover": {
                  backgroundColor:
                    theme.colorScheme === "light"
                      ? theme.colors.gray[3]
                      : theme.colors.dark[5],
                },
              })}
              size="md"
              onClick={() => setOpened(!opened)}
              opened={opened}
            />
          ) : (
            <div className={classes.leftSide}>{leftSide}</div>
          )}
          {!!responsive && tablet ? (
            <div className={classes.children}></div>
          ) : (
            <div className={classes.children}>{children}</div>
          )}
          <div className={classes.rightSide}>{rightSide}</div>
        </Container>
        {!!withBorder && <Divider size={borderSize || "xs"} />}
      </Box>
      <Drawer
        opened={opened}
        withCloseButton={false}
        onClose={() => setOpened(false)}
        position="left"
        size="75%"
      >
        <Center>
          <Logo width={300} />
        </Center>
        <Box px={20}>
          <Button leftIcon={<FaRocket />} size="lg" color="blue" fullWidth>
            Features
          </Button>
          <Space h={15} />
          <Button leftIcon={<FaUniversity />} size="lg" color="green" fullWidth>
            Departments
          </Button>
          <Space h={15} />
          {user && (
            <Button
              leftIcon={<FaBook />}
              size="lg"
              color="red"
              onClick={() => {
                navigate("/courses");
              }}
              fullWidth
            >
              Courses
            </Button>
          )}
        </Box>
      </Drawer>
    </Box>
  );
}
