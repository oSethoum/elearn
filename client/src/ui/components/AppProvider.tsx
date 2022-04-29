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
import i18n from "../../i18n";
import { LangContext, TLang } from "../../context";
import { UserContext } from "../../context/user";
import { ModalsProvider } from "@mantine/modals";
import { User } from "../../graphql";
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
            <ModalsProvider>
              <GlobalStyles />
              <NotificationsProvider>
                <TypographyStylesProvider>{children}</TypographyStylesProvider>
              </NotificationsProvider>
            </ModalsProvider>
          </MantineProvider>
        </ColorSchemeProvider>
      </LangContext.Provider>
    </UserContext.Provider>
  );
}
