import {
  Box,
  Center,
  createStyles,
  Divider,
  Grid,
  Group,
  Paper,
  Select,
  Text,
} from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { ComponentPropsWithoutRef, useContext } from "react";
import { useTranslation } from "react-i18next";
import { FacebookLogo, InstagramLogo, Logo, YoutubeLogo } from ".";
import { LangContext, TLang } from "../../context";

interface FooterProps extends ComponentPropsWithoutRef<"div"> {
  withBorder?: boolean;
  borderSize?: "xs" | "sm" | "md" | "lg" | "xl";
  height?: number;
}

const useStyles = createStyles(
  (theme, { y, height }: { y: number; height?: number }) => ({
    root: {
      flexDirection: "row",
      minHeight: 250,
      height: height || "auto",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    },
  })
);

export function Footer({
  withBorder,
  height,
  borderSize,
  ...others
}: FooterProps) {
  const [{ y }] = useWindowScroll();
  const { t } = useTranslation();
  const { classes } = useStyles({ y, height });
  const { lang, setLang } = useContext(LangContext);
  return (
    <Paper component="div" className={classes.root} {...others}>
      {!!withBorder && <Divider size={borderSize || "xs"} />}
      <Grid columns={9} gutter="sm" mx={15}>
        <Grid.Col span={9} lg={3}>
          <Center style={{ minHeight: 170 }}>
            <Logo width={300} />
          </Center>
        </Grid.Col>
        <Grid.Col span={9} lg={2}>
          <Box>
            <Text underline component="h2">
              {t("contactUs")}
            </Text>
            <Group spacing={5} direction="column">
              <Box>
                <b>{t("phone")}:</b> 024950505
              </Box>
              <Box>
                <b>{t("email")}:</b> heirechemohamed@yahoo.fr
              </Box>
            </Group>
          </Box>
        </Grid.Col>
        <Grid.Col span={9} lg={2}>
          <Box>
            <Text underline component="h2">
              {t("followUs")}
            </Text>
            <Group direction="row">
              <a href="http://www.facebook.com" target="_blank">
                <FacebookLogo width={40} />
              </a>
              <a href="http://www.instagram.com" target="_blank">
                <InstagramLogo width={40} />
              </a>
              <a href="http://www.youtube.com" target="_blank">
                <YoutubeLogo width={40} />
              </a>
            </Group>
          </Box>
        </Grid.Col>
        <Grid.Col span={9} lg={2}>
          <Box>
            <Text underline component="h2">
              {t("settings")}
            </Text>
            <Select
              variant="filled"
              style={{ width: 200 }}
              onChange={(value: TLang) => setLang(value)}
              value={lang}
              data={[
                { label: t("french"), value: "fr" },
                { label: t("english"), value: "en" },
                { label: t("arabic"), value: "ar" },
              ]}
            />
          </Box>
        </Grid.Col>
      </Grid>
      <Divider mx={50} my={20} />
      <Text style={{ height: 50 }} align="center">
        {t("copyRight")}
      </Text>
    </Paper>
  );
}
