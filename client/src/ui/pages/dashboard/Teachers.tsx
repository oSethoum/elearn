import { useAppContext } from "@/context";
import {
  namedOperations,
  Teacher,
  useDeleteUserMutation,
  useTeachersQuery,
  useUpdateUserMutation,
} from "@/graphql";
import { DataGrid, Loader } from "@/ui/components";
import { EditTeacher } from "@/ui/forms/EditTeacher";
import { NewTeacher } from "@/ui/forms/NewTeacher";
import { Box, Button, Badge, Group, ActionIcon, Menu } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { useNotifications } from "@mantine/notifications";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdEdit } from "react-icons/md";

export const Teachers = () => {
  const { data, loading } = useTeachersQuery();
  const [selectedTeachers, setSelectedTeachers] = useState<number[]>([]);
  const { t } = useTranslation();
  const modals = useModals();
  const notification = useNotifications();
  const [deleteUser] = useDeleteUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const { setHeader } = useAppContext();

  useEffect(() => {
    setHeader("teachers");
  }, []);

  const deleteModal = (id?: number) =>
    modals.openConfirmModal({
      title: t("delete"),
      children: t("deleteMessage"),
      labels: { confirm: t("confirm"), cancel: t("cancel") },
      withCloseButton: false,
      confirmProps: { color: "red" },
      centered: true,
      onCancel: () => {},
      onConfirm: () => {
        id &&
          deleteUser({
            variables: {
              where: {
                id,
              },
            },
            refetchQueries: [namedOperations.Query.Teachers],
          });
      },
    });

  const toggleStatus = (id?: number, currentStatus?: boolean) => {
    id &&
      updateUser({
        variables: {
          data: {
            disabled: {
              set: !currentStatus,
            },
          },
          where: {
            id,
          },
        },
        refetchQueries: [namedOperations.Query.Teachers],
      });
  };
  const addTeacher = () => {
    const id = modals.openModal({
      title: t("addTeacher"),
      size: "xl",
      children: (
        <NewTeacher
          onSubmit={() => {
            notification.showNotification({
              message: t("success"),
              color: "green",
            });
            modals.closeModal(id);
          }}
          onCancel={() => {
            modals.closeModal(id);
          }}
        />
      ),
    });
  };
  const editTeacher = (index: number) => {
    const id = modals.openModal({
      title: t("editTeacher"),
      size: "xl",
      children: (
        <EditTeacher
          teacher={data?.teachers[index] as Teacher}
          onSubmit={() => {
            notification.showNotification({
              message: t("success"),
              color: "green",
            });
            modals.closeModal(id);
          }}
          onCancel={() => {
            modals.closeModal(id);
          }}
        />
      ),
    });
  };

  if (loading) {
    return <Loader height="80vh" />;
  }

  return (
    <Box m={10}>
      <Button mb={10} onClick={addTeacher}>
        {t("add")}
      </Button>
      <DataGrid
        selectedIndexes={selectedTeachers}
        setSelectedIndexes={setSelectedTeachers}
        headerModifier={t}
        height="80vh"
        data={
          data?.teachers.map((teacher) => ({
            id: teacher.id,
            firstName: teacher.firstName,
            lastName: teacher.lastName,
            email: teacher.user.email,
            status: (
              <Badge color={teacher.user.disabled ? "blue" : "green"}>
                {teacher.user.disabled ? t("disabled") : t("enabled")}
              </Badge>
            ),
          })) as object[]
        }
        actionsLabel={t("actions")}
        actions={(index) => {
          if (!data?.teachers[index]) return <></>;

          return (
            <Group>
              <ActionIcon
                onClick={() => editTeacher(index)}
                color="green"
                variant="light"
              >
                <MdEdit />
              </ActionIcon>
              <Menu>
                <Menu.Item
                  color={data?.teachers[index].user.disabled ? "green" : "blue"}
                  onClick={() =>
                    toggleStatus(
                      data?.teachers[index].user.id,
                      data?.teachers[index].user.disabled
                    )
                  }
                >
                  {data?.teachers[index].user.disabled
                    ? t("enable")
                    : t("disable")}
                </Menu.Item>
                <Menu.Item
                  color="red"
                  onClick={() => deleteModal(data?.teachers[index].user.id)}
                >
                  {t("delete")}
                </Menu.Item>
              </Menu>
            </Group>
          );
        }}
      />
    </Box>
  );
};
