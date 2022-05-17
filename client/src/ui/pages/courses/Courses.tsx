import { Text, Group } from "@mantine/core";
import {
  UserButton,
  ColorSchemeButton,
  Header,
  BackButton,
  Footer,
} from "../../components";
import { Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useUrlQuery } from "@/hooks";

export function Courses() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const query = useUrlQuery();
  const [to, setTo] = useState<string | undefined>("");

  useEffect(() => {
    console.log(pathname);

    if (pathname.endsWith("/courses") || pathname.endsWith("/courses/")) {
      setTo("/");
    } else if (!!query.get("tab")) {
      setTo("/courses");
    } else {
      setTo(undefined);
    }
  }, [pathname]);

  return (
    <>
      <Header
        rightSide={
          <Group direction="row">
            <UserButton />
            <ColorSchemeButton />
          </Group>
        }
        leftSide={<BackButton to={to} />}
        withBorder
      >
        <Text weight="bold" align="center" size="xl">
          {t("courses")}
        </Text>
      </Header>
      <Outlet />
      <Footer withBorder />
    </>
  );
}

export default Courses;
