import {
  ActionIcon,
  Avatar,
  Group,
  MediaQuery,
  Menu,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "@/context/";
import { useModals } from "@mantine/modals";
import Profile from "../forms/Profile";
import { useNotifications } from "@mantine/notifications";

export function UserButton() {
  const { t } = useTranslation();
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const { user, setUser } = useAppContext();
  const { openConfirmModal, closeModal, openModal } = useModals();
  const { showNotification } = useNotifications();
  const [opened, setOpened] = useState(false);
  const firstName =
    user?.student?.firstName ||
    user?.admin?.firstName ||
    user?.teacher?.firstName;
  const lastName =
    user?.student?.lastName || user?.admin?.lastName || user?.teacher?.lastName;

  const handleLogout = () => {
    setOpened(false);
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

  const handleEdit = () => {
    setOpened(false);
    const id = openModal({
      title: t("editProfile"),
      size: "xl",
      children: (
        <Profile
          onCancel={() => closeModal(id)}
          onSubmit={() => {
            closeModal(id);
            showNotification({
              message: t("success"),
              color: "green",
            });
          }}
        />
      ),
    });
  };

  return (
    <Menu
      size="xl"
      opened={opened}
      control={
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
      }
    >
      <Menu.Item onClick={handleEdit} color="green">
        {t("editProfile")}
      </Menu.Item>
      <Menu.Item onClick={handleLogout} color="red">
        {t("logout")}
      </Menu.Item>
    </Menu>
  );
}
