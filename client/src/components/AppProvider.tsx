import React, { useEffect, useState } from "react";
import { NotificationsProvider } from "@mantine/notifications";
import {
  ColorScheme,
  ColorSchemeProvider,
  Global,
  MantineProvider,
  MantineThemeOverride,
  TypographyStylesProvider,
} from "@mantine/core";
import { useLocalStorageValue } from "@mantine/hooks";
import rtlPlugin from "stylis-plugin-rtl";
import i18n from "../i18n";
import { LangContext, TLang } from "../context";
import { User, UserContext } from "../context/user";

const GlobalStyles = () => {
  return (
    <Global
      styles={(theme) => ({
        "*, *::before, *::after": {
          boxSizing: "border-box",
        },

        body: {
          ...theme.fn.fontStyles(),
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
          lineHeight: theme.lineHeight,
          fontSizes: theme.fontSizes.md,
        },
      })}
    />
  );
};

export function AppProvider({ children }: React.ComponentPropsWithRef<"div">) {
  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
  });

  const [lang, setLang] = useLocalStorageValue<TLang>({
    key: "lang",
    defaultValue: "en",
  });

  const [dir, setDir] = useState<"ltr" | "rtl">("ltr");

  const toggleColorScheme = (value?: ColorScheme) => {
    const scheme = value || colorScheme === "dark" ? "light" : "dark";
    setColorScheme(scheme);
  };

  useEffect(() => {
    document.documentElement.style.colorScheme = colorScheme;
  }, [colorScheme]);

  useEffect(() => {
    document.documentElement.setAttribute("dir", dir);
  }, [dir]);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    lang === "ar" ? setDir("rtl") : setDir("ltr");
    i18n.changeLanguage(lang);
  }, [lang]);

  const theme: MantineThemeOverride = {
    colorScheme,

    colors: {
      Tradewind: [
        "#f3faf9",
        "#d8efec",
        "#b0dfda",
        "#6abeb8",
        "#56aba7",
        "#3c908e",
        "#2e7373",
        "#285c5d",
        "#244a4b",
        "#213f40",
      ],
    },
    dir,
  };

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("/api/refresh", { method: "POST" }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setUser(data);
        });
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <LangContext.Provider value={{ lang, setLang }}>
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            theme={theme}
            withNormalizeCSS
            emotionOptions={
              dir === "rtl"
                ? { key: "mantine-rtl", stylisPlugins: [rtlPlugin] }
                : { key: "mantine" }
            }
            styles={{
              ActionIcon: (theme) => ({
                root: {
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[9]
                      : theme.colors.gray[2],
                  "&:hover": {
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[6]
                        : theme.colors.gray[4],
                  },
                },
              }),
            }}
          >
            <GlobalStyles />
            <NotificationsProvider>
              <TypographyStylesProvider>{children}</TypographyStylesProvider>
            </NotificationsProvider>
          </MantineProvider>
        </ColorSchemeProvider>
      </LangContext.Provider>
    </UserContext.Provider>
  );
}
