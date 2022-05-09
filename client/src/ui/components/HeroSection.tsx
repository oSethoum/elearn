import React, { useContext } from "react";
import {
  Title,
  Text,
  Container,
  Button,
  Overlay,
  createStyles,
  Group,
  Box,
  Space,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppContext } from "@/context";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    height: "100vh",
    paddingTop: 220,
    paddingBottom: 130,
    backgroundImage:
      "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    "@media (max-width: 520px)": {
      paddingTop: 80,
      paddingBottom: 50,
    },
  },

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

export function HeroSection() {
  const { classes, cx } = useStyles();
  const { t } = useTranslation();
  const { user } = useAppContext();

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

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
                <Button className={classes.control} variant="white" size="lg">
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
    </div>
  );
}
