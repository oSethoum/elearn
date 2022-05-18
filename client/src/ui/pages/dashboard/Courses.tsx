import {
  namedOperations,
  useCoursesQuery,
  useDeleteCourseMutation,
} from "@/graphql";

import { DataGrid, Loader } from "@/ui/components";
import { ActionIcon, Box, Button, Group, Menu } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdDelete, MdEdit } from "react-icons/md";
import Course from "../courses/Course";

export const DashboardCourses = () => {
  const [selectedCourses, setSelectedCourses] = useState<number[]>([]);
  const { data, loading } = useCoursesQuery();
  const { t } = useTranslation();
  const modals = useModals();
  const [deleteCourse] = useDeleteCourseMutation();

  if (loading) return <Loader height="80vh" />;

  const deleteModal = (index: number) =>
    modals.openConfirmModal({
      title: t("delete"),
      children: t("deleteMessage"),
      labels: { confirm: t("confirm"), cancel: t("cancel") },
      withCloseButton: false,
      confirmProps: { color: "red" },
      centered: true,
      onCancel: () => {},
      onConfirm: () => {
        deleteCourse({
          variables: {
            where: {
              id: data?.courses[index].id,
            },
          },
          refetchQueries: [namedOperations.Query.Courses],
        });
      },
    });

  const editModal = (index: number) => {};

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
          data?.courses.map((course) => ({
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
            <ActionIcon color="red" variant="light">
              <MdDelete />
            </ActionIcon>
          </Group>
        )}
      />
    </Box>
  );
};

export default DashboardCourses;
