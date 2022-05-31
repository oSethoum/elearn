import { ActionIcon, Box, Button, Group } from "@mantine/core";
import {
  Department,
  namedOperations,
  useDeleteDepartmentMutation,
  useDepartmentsQuery,
} from "@/graphql";
import { DataGrid, Loader } from "@/ui/components";
import { MdDelete, MdEdit } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useModals } from "@mantine/modals";
import { EditDepartments } from "@/ui/forms/EditDepartment";
import { useNotifications } from "@mantine/notifications";
import { NewDepartments } from "@/ui/forms/NewDepartment";
import { useAppContext } from "@/context";
import { useEffect } from "react";

export const Departments = () => {
  const { data } = useDepartmentsQuery();
  const { t } = useTranslation();
  const [deleteDepartment] = useDeleteDepartmentMutation();
  const { openModal, closeModal, openConfirmModal } = useModals();
  const { showNotification } = useNotifications();
  const { setHeader } = useAppContext();
  useEffect(() => {
    setHeader("departments");
  }, []);

  if (!data) return <Loader height="80vh" />;

  const addModal = () => {
    const id = openModal({
      title: t("addDepartment"),
      size:"xl",
      children: (
        <NewDepartments
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

  const deleteModal = (index: number) => {
    openConfirmModal({
      title: t("confirmAction"),
      children: t("deleteMessage"),
      labels: { confirm: t("confirm"), cancel: t("cancel") },
      confirmProps: { color: "red" },
      centered: true,
      withCloseButton: false,

      onConfirm: () => {
        deleteDepartment({
          variables: {
            where: {
              id: data.departments[index].id,
            },
          },
          refetchQueries: [namedOperations.Query.Departments],
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

  const editModal = (index: number) => {
    const id = openModal({
      title: t("editDepartment"),
      size: "xl",
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
      <Button mb={20} onClick={addModal}>
        {t("add")}
      </Button>

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
            <ActionIcon onClick={() => editModal(index)} color="green">
              <MdEdit />
            </ActionIcon>
            <ActionIcon onClick={() => deleteModal(index)} color="red">
              <MdDelete />
            </ActionIcon>
          </Group>
        )}
      />
    </Box>
  );
};

export default Departments;
