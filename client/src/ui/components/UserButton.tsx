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
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "@/context/";
import { useModals } from "@mantine/modals";

export function UserButton() {
  const { t } = useTranslation();
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const { user, setUser } = useAppContext();
  const [opened, setOpened] = useState(false);
  const { openConfirmModal, closeModal } = useModals();
  const firstName =
    user?.student?.firstName ||
    user?.admin?.firstName ||
    user?.teacher?.firstName;
  const lastName =
    user?.student?.lastName || user?.admin?.lastName || user?.teacher?.lastName;

  const handleLogout = () => {
    openConfirmModal({
      title: t("logout"),
      children: t("logoutMessage"),
      centered: true,
      confirmProps: { color: "red" },
      labels: { confirm: t("confirm"), cancel: t("cancel") },
      withCloseButton: false,
      onConfirm: async () => {
        await fetch("/api/logout", {
          method: "POST",
        });
        navigate("/");
        setUser(null);
      },
    });
  };

  return (
    <ActionIcon
      onClick={() => user && handleLogout()}
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
  );
}
