import { useAppContext } from "@/context";
import {
  namedOperations,
  Student,
  useDeleteUserMutation,
  useStudentsQuery,
  useUpdateUserMutation,
} from "@/graphql";
import { DataGrid, Loader } from "@/ui/components";
import { EditStudent } from "@/ui/forms/EditStudent";
import { NewStudent } from "@/ui/forms/NewStudent";
import { Box, Button, Badge, Group, ActionIcon, Menu } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { useNotifications } from "@mantine/notifications";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdEdit } from "react-icons/md";

export const Students = () => {
  const { data, loading } = useStudentsQuery();
  const [selectedStudents, setSelectedStudents] = useState<number[]>([]);
  const { t } = useTranslation();
  const modals = useModals();
  const notification = useNotifications();
  const [deleteUser] = useDeleteUserMutation();
  const [updateUser] = useUpdateUserMutation();

  const { setHeader } = useAppContext();

  useEffect(() => {
    setHeader("students");
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
            refetchQueries: [namedOperations.Query.Students],
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
        refetchQueries: [namedOperations.Query.Students],
      });
  };

  const addStudent = () => {
    const id = modals.openModal({
      title: t("addStudent"),
      size: "xl",
      children: (
        <NewStudent
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

  const editStudent = (index: number) => {
    const id = modals.openModal({
      title: t("editStudent"),
      size: "xl",
      children: (
        <EditStudent
          student={data?.students[index] as Student}
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
    <Box p={10}>
      <Button onClick={addStudent} mb={8}>
        {t("add")}
      </Button>

      <DataGrid
        selectedIndexes={selectedStudents}
        setSelectedIndexes={setSelectedStudents}
        height="80vh"
        headerModifier={t}
        data={
          data?.students.map((student) => ({
            id: student.id,
            firstName: student.firstName,
            lastName: student.lastName,
            email: student.user.email,
            topic: student.topic?.name,
            year: student.year,
            status: (
              <Badge color={student.user.disabled ? "blue" : "green"}>
                {student.user.disabled ? t("disabled") : t("enabled")}
              </Badge>
            ),
          })) as object[]
        }
        actionsLabel={t("actions")}
        actions={(index) => {
          if (!data?.students[index]) return <></>;
          return (
            <Group>
              <ActionIcon
                onClick={() => editStudent(index)}
                color="green"
                variant="light"
              >
                <MdEdit />
              </ActionIcon>
              <Menu>
                <Menu.Item
                  onClick={() =>
                    toggleStatus(
                      data?.students[index].user.id,
                      data?.students[index].user.disabled
                    )
                  }
                  color={data?.students[index].user.disabled ? "green" : "blue"}
                >
                  {data?.students[index].user.disabled
                    ? t("enable")
                    : t("disable")}
                </Menu.Item>
                <Menu.Item
                  color="red"
                  onClick={() => deleteModal(data?.students[index].user.id)}
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
