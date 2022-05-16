import {
  namedOperations,
  Student,
  Teacher,
  useDashboardUsersQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
} from "@/graphql";
import { DataGrid, Loader } from "@/ui/components";
import { EditStudent } from "@/ui/forms/EditStudent";
import { EditTeacher } from "@/ui/forms/EditTeacher";
import { NewStudent } from "@/ui/forms/NewStudent";
import { NewTeacher } from "@/ui/forms/NewTeacher";
import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Card,
  Group,
  Menu,
  Tabs,
} from "@mantine/core";
import { useModals } from "@mantine/modals";
import { useNotifications } from "@mantine/notifications";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdEdit } from "react-icons/md";

export const DashboardUsers = () => {
  const { t } = useTranslation();
  const { data } = useDashboardUsersQuery();
  const [selectedTeachers, setSelectedTeachers] = useState<number[]>([]);
  const [selectedStudents, setSelectedStudents] = useState<number[]>([]);
  const modals = useModals();
  const [deleteUser] = useDeleteUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const notification = useNotifications();

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
            refetchQueries: [namedOperations.Query.DashboardUsers],
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
        refetchQueries: [namedOperations.Query.DashboardUsers],
      });
  };

  if (!data) {
    return <Loader height="80vh" />;
  }

  const addStudent = () => {
    const id = modals.openModal({
      title: t("addStudent"),
      size: "xl",
      children: (
        <NewStudent
          onSubmit={() => {}}
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

  const DashboardStudents = () => {
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
              grade: student.grade,
              status: (
                <Badge color={student.user.disabled ? "blue" : "green"}>
                  {student.user.disabled ? t("disabled") : t("enabled")}
                </Badge>
              ),
            })) as object[]
          }
          actionsLabel={t("actions")}
          actions={(index) => (
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
          )}
        />
      </Box>
    );
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
      title: t("addTeacher"),
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
  const DashboardTeachers = () => {
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
          actions={(index) => (
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
          )}
        />
      </Box>
    );
  };

  return (
    <Card withBorder p={4}>
      <Tabs>
        <Tabs.Tab label={t("students")}>
          <DashboardStudents />
        </Tabs.Tab>
        <Tabs.Tab label={t("teachers")}>
          <DashboardTeachers />
        </Tabs.Tab>
      </Tabs>
    </Card>
  );
};

export default DashboardUsers;
