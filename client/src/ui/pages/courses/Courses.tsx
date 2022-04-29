import { Text, Group } from "@mantine/core";
import {
  UserButton,
  ColorSchemeButton,
  Header,
  BackButton,
  Footer,
} from "../../components";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Courses() {
  const { t } = useTranslation();
  return (
    <>
      <Header
        rightSide={
          <Group direction="row">
            <UserButton />
            <ColorSchemeButton />
          </Group>
        }
        leftSide={<BackButton />}
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
