import {
  namedOperations,
  useCoursesQuery,
  useDeleteCourseMutation,
} from "@/graphql";
import { DataGrid, Loader } from "@/ui/components";
import {
  ActionIcon,
  Box,
  Button,
  Group,
  Menu,
  Paper,
  Text,
} from "@mantine/core";
import { useModals } from "@mantine/modals";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdEdit } from "react-icons/md";

export const DashboardCourses = () => {
  const [selectedCourses, setSelectedCourses] = useState<number[]>([]);
  const { data, loading } = useCoursesQuery();
  const { t } = useTranslation();
  const modals = useModals();
  const [deleteCourse] = useDeleteCourseMutation();

  if (loading) return <Loader height="80vh" />;

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
          deleteCourse({
            variables: {
              where: {
                id,
              },
            },
            refetchQueries: [namedOperations.Query.Courses],
          });
      },
    });

  return (
    <Box sx={{ height: "100%" }}>
      <Group mt={5} my={15}>
        <Button>Add</Button>
      </Group>
      <DataGrid
        headerModifier={t}
        selectedIndexes={selectedCourses}
        setSelectedIndexes={setSelectedCourses}
        data={
          data?.courses.map((course, index) => ({
            id: course.id,
            title: course.title,
            teacher: course.teacher
              ? course.teacher.firstName + " " + course.teacher.lastName
              : "no author",
          })) as object[]
        }
        actionsLabel={t("actions")}
        actions={(index) => (
          <Group>
            <ActionIcon color="green" variant="light">
              <MdEdit />
            </ActionIcon>
            <Menu>
              <Menu.Item color={"blue"} onClick={() => {}}>
                {"publish"}
              </Menu.Item>
              <Menu.Item
                color="red"
                onClick={() => deleteModal(data?.courses[index].id)}
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

export default DashboardCourses;
