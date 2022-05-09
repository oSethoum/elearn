import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Group,
  MediaQuery,
  Modal,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "@/context/";

export function UserButton() {
  const { t } = useTranslation();
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const { user, setUser } = useAppContext();
  const [opened, setOpened] = useState(false);
  const firstName =
    user?.student?.firstName ||
    user?.admin?.firstName ||
    user?.teacher?.firstName;
  const lastName =
    user?.student?.lastName || user?.admin?.lastName || user?.teacher?.lastName;

  return (
    <>
      <ActionIcon
        onClick={() => user && setOpened(!opened)}
        sx={{ width: "auto" }}
        radius="xl"
        size="xl"
      >
        <Group mx={8} direction="row" spacing="xs">
          <Avatar color={theme.primaryColor} size={34} radius={50} />
          <MediaQuery smallerThan="md" styles={{ display: "none" }}>
            <Text color={theme.primaryColor} weight="bold">
              {user ? firstName + " " + lastName : t("anonymous")}
            </Text>
          </MediaQuery>
        </Group>
      </ActionIcon>
      {user && (
        <Modal
          onClose={() => setOpened(false)}
          opened={opened}
          centered
          size={400}
          withCloseButton={false}
        >
          <Group grow direction="column">
            <MediaQuery largerThan="md" styles={{ display: "none" }}>
              <Badge
                sx={{ fontSize: 15, backgroundColor: "transparent" }}
                color={theme.primaryColor}
                py={20}
              >
                {user ? firstName + " " + lastName : t("anonymous")}
              </Badge>
            </MediaQuery>
            <Button
              color="red"
              onClick={() => {
                fetch("/api/logout", { method: "POST" }).then((res) => {
                  if (res.status === 200) {
                    setUser(null);
                    setOpened(false);
                  }
                });
                navigate("/");
              }}
            >
              {t("logout")}
            </Button>
          </Group>
        </Modal>
      )}
    </>
  );
}
