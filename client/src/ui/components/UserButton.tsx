import {
  ActionIcon,
  Avatar,
  Button,
  Group,
  Modal,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user";

export function UserButton() {
  const { t } = useTranslation();
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
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
          <Text color={theme.primaryColor} weight="bold">
            {user ? firstName + " " + lastName : t("anonymous")}
          </Text>
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
              Logout
            </Button>
          </Group>
        </Modal>
      )}
    </>
  );
}
