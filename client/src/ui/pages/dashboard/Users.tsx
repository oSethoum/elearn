import { Card, Tabs } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Students } from "./Students";
import { Teachers } from "./Teachers";

export const DashboardUsers = () => {
  const { t } = useTranslation();

  return (
    <Card withBorder p={4}>
      <Tabs>
        <Tabs.Tab label={t("students")}>
          <Students />
        </Tabs.Tab>
        <Tabs.Tab label={t("teachers")}>
          <Teachers />
        </Tabs.Tab>
      </Tabs>
    </Card>
  );
};

export default DashboardUsers;
