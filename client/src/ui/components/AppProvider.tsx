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
import { useLocalStorageValue, useScrollIntoView } from "@mantine/hooks";
import rtlPlugin from "stylis-plugin-rtl";
import i18n from "../../i18n";
import { AppContextProvider, ILanguage } from "@/context";
import { ModalsProvider } from "@mantine/modals";
import { User } from "../../graphql";
import { onError } from "@apollo/client/link/error";
import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

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

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const link = from([
  errorLink,
  new HttpLink({
    uri: "/graphql",
  }),
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export function AppProvider({ children }: React.ComponentPropsWithRef<"div">) {
  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
  });

  const [language, setLanguage] = useLocalStorageValue<ILanguage>({
    key: "language",
    defaultValue: "en",
  });

  const [header, setHeader] = useState<string>("");

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
    document.documentElement.setAttribute("language", language);
    language === "ar" ? setDir("rtl") : setDir("ltr");
    i18n.changeLanguage(language);
  }, [language]);

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

  const { scrollIntoView: scrollToFeatures, targetRef: featuresRef } =
    useScrollIntoView();
  const { scrollIntoView: scrollToDepartments, targetRef: departmentsRef } =
    useScrollIntoView();

  return (
    <AppContextProvider
      value={{
        user,
        setUser,
        language,
        setLanguage,
        header,
        setHeader,
        featuresRef,
        departmentsRef,
        scrollToFeatures,
        scrollToDepartments,
      }}
    >
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
          <ApolloProvider client={client}>
            <ModalsProvider>
              <NotificationsProvider>
                <TypographyStylesProvider>{children}</TypographyStylesProvider>
              </NotificationsProvider>
            </ModalsProvider>
          </ApolloProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </AppContextProvider>
  );
}
