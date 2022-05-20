import { useAppContext } from "@/context";
import {
  BackgroundImage,
  Box,
  Button,
  Center,
  createStyles,
  Group,
  Text,
  Container,
  Space,
  Overlay,
  Paper,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Logo } from ".";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const useStyles = createStyles((theme) => ({
  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: "center",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    "@media (max-width: 520px)": {
      fontSize: 28,
      textAlign: "left",
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: "center",

    "@media (max-width: 520px)": {
      fontSize: theme.fontSizes.md,
      textAlign: "left",
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 1.5,
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    "@media (max-width: 520px)": {
      flexDirection: "column",
    },
  },

  control: {
    height: 42,
    fontSize: theme.fontSizes.md,

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    "@media (max-width: 520px)": {
      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: "rgba(255, 255, 255, .4)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .45) !important",
    },
  },
}));

export const HeroSection = () => {
  const { classes, cx } = useStyles();
  const { t } = useTranslation();
  const { user } = useAppContext();
  const theme = useMantineTheme();

  return (
    <Box>
      <BackgroundImage
        sx={{
          height: "100vh",
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
        src={heroImage}
      >
        <Overlay zIndex={1} color="#000" opacity={0.65} />
        <Paper
          sx={(theme) => ({
            position: "absolute",
            zIndex: 10,
            width: 300,
            top: 20,
            backgroundColor: theme.fn.rgba(theme.colors.dark[9], 0.6),
          })}
        >
          <Logo fill={theme.colors[theme.primaryColor][3]} width={300} />
        </Paper>
        <Center sx={{ height: "120vh" }}>
          <div className={classes.inner}>
            <Title className={classes.title}>
              {t("heroLine")}{" "}
              <Text component="span" inherit className={classes.highlight}>
                {t("online")}
              </Text>
            </Title>

            <Container size={640}>
              <Text size="lg" className={classes.description}>
                {t("subHeroLine")}
              </Text>
            </Container>

            <Box className={classes.controls}>
              {user ? (
                <Space h={80} />
              ) : (
                <Group mt={10}>
                  <Link to="/register">
                    <Button
                      className={classes.control}
                      variant="white"
                      size="lg"
                    >
                      {t("register")}
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button
                      className={cx(classes.control, classes.secondaryControl)}
                      size="lg"
                    >
                      {t("login")}
                    </Button>
                  </Link>
                </Group>
              )}
            </Box>
          </div>
        </Center>
      </BackgroundImage>
    </Box>
  );
};
