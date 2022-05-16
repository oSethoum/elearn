import {
  ComponentPropsWithoutRef,
  ReactNode,
  useEffect,
  useState,
} from "react";
import {
  Box,
  Burger,
  Button,
  Center,
  createStyles,
  Divider,
  Drawer,
  Paper,
  Space,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery, useWindowScroll } from "@mantine/hooks";
import { Logo } from "./Logo";
import { useLocation, useNavigate, useNavigationType } from "react-router-dom";
import { FaUniversity, FaBook, FaRocket, FaQuestion } from "react-icons/fa";
import { useAppContext } from "@/context";
import { useTranslation } from "react-i18next";
import { MdDashboard } from "react-icons/md";

interface stylesProps {
  y: number;
  height?: number;
}

const useStyles = createStyles((theme, { y, height }: stylesProps) => ({
  root: {
    position: "sticky",
    zIndex: 50,
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
  withLogo?: boolean;
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
  withLogo,
  borderSize,
  ...others
}: HeaderProps) {
  const [{ y }] = useWindowScroll();
  const { classes } = useStyles({ y, height });
  const { breakpoints } = useMantineTheme();
  const tablet = useMediaQuery(`(max-width:${breakpoints.sm}px)`);
  const [opened, setOpened] = useState(false);
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const { scrollToFeatures, scrollToDepartments } = useAppContext();

  useEffect(() => {
    setOpened(false);
  }, [tablet]);

  const { user } = useAppContext();
  const navigate = useNavigate();

  return (
    <Box className={classes.root}>
      <Box className={classes.inner}>
        <Box px={20} className={classes.container} {...others}>
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
        </Box>
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
          <Button
            leftIcon={<FaRocket />}
            onClick={() => {
              setOpened(false);
              scrollToFeatures();
            }}
            size="lg"
            color="blue"
            fullWidth
          >
            {t("features")}
          </Button>
          <Space h={15} />
          <Button
            leftIcon={<FaUniversity />}
            onClick={() => {
              setOpened(false);
              scrollToDepartments();
            }}
            size="lg"
            color="green"
            fullWidth
          >
            {t("departments")}
          </Button>
          <Space h={15} />
          <Button
            onClick={() => {
              navigate("/about-us");
            }}
            leftIcon={<FaQuestion />}
            size="lg"
            color="orange"
            fullWidth
          >
            {t("aboutUs")}
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
              {t("courses")}
            </Button>
          )}
          <Space h={15} />
          {user?.role === "admin" && (
            <Button
              leftIcon={<MdDashboard />}
              size="lg"
              color="violet"
              onClick={() => {
                navigate("/dashboard");
              }}
              fullWidth
            >
              {t("dashboard")}
            </Button>
          )}
        </Box>
      </Drawer>
      {!!withLogo && (
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            zIndex: 20,
          }}
        >
          <Paper
            mt={-2}
            shadow="sm"
            sx={(theme) => ({
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              borderBottom: `1px solid ${
                theme.colorScheme === "dark"
                  ? theme.colors.gray[7]
                  : theme.colors.gray[4]
              }`,
              borderLeft: `1px solid ${
                theme.colorScheme === "dark"
                  ? theme.colors.gray[7]
                  : theme.colors.gray[4]
              }`,
              borderRight: `1px solid ${
                theme.colorScheme === "dark"
                  ? theme.colors.gray[7]
                  : theme.colors.gray[4]
              }`,
            })}
          >
            <Logo width={250} />
          </Paper>
        </Box>
      )}
    </Box>
  );
}
