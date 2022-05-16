import { ActionIcon, Box, Button, Group, Menu, Paper } from "@mantine/core";
import {
  Department,
  useDeleteDepartmentMutation,
  useDepartmentsQuery,
} from "@/graphql";
import { DataGrid } from "@/ui/components";
import { MdDelete, MdEdit } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useModals } from "@mantine/modals";
import { EditDepartments } from "@/ui/forms/EditDepartment";
import { useNotifications } from "@mantine/notifications";

export const Departments = () => {
  const { data } = useDepartmentsQuery();
  const { t } = useTranslation();
  const [deleteDepartment] = useDeleteDepartmentMutation();
  const { openModal, closeModal, openConfirmModal } = useModals();
  const { showNotification } = useNotifications();

  if (!data) return <Box>Loading...</Box>;

  const handleDelete = (index: number) => {
    openConfirmModal({
      title: t("delete"),
      children: t("deleteMessage"),
      labels: { confirm: t("confirm"), cancel: t("cancel") },

      onConfirm: () => {
        deleteDepartment({
          variables: {
            where: {
              id: data.departments[index].id,
            },
          },
          onCompleted() {
            showNotification({
              message: t("success"),
              color: "green",
            });
          },
        });
      },
    });
  };

  const handleEdit = (index: number) => {
    console.log(data.departments[index]);

    const id = openModal({
      title: t("editDepartment"),
      children: (
        <EditDepartments
          department={data.departments[index] as Department}
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
    <Box sx={{ height: "100%" }} m={10}>
      <DataGrid
        headerModifier={t}
        data={data?.departments.map((department, index) => ({
          id: department.id,
          name: department.name,
          topics: department._count?.topics,
        }))}
        actionsLabel="actions"
        actions={(index) => (
          <Group>
            <ActionIcon onClick={() => handleEdit(index)} color="green">
              <MdEdit />
            </ActionIcon>
            <ActionIcon onClick={() => handleDelete(index)} color="red">
              <MdDelete />
            </ActionIcon>
          </Group>
        )}
      />
    </Box>
  );
};

export default Departments;
