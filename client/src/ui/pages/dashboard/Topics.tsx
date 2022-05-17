import { ActionIcon, Box, Group } from "@mantine/core";
import { Topic, useDeleteTopicMutation, useTopicsQuery } from "@/graphql";
import { DataGrid, Loader } from "@/ui/components";
import { MdDelete, MdEdit } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useModals } from "@mantine/modals";
import { useNotifications } from "@mantine/notifications";
import { EditTopic } from "@/ui/forms/EditTopic";

export const Topics = () => {
  const { data } = useTopicsQuery();
  const { t } = useTranslation();
  const [deleteTopic] = useDeleteTopicMutation();
  const modals = useModals();
  const notifications = useNotifications();

  if (!data) return <Loader height={"80vh"} />;

  const deleteModal = (index: number) => {
    const id = modals.openConfirmModal({
      title: t("confirmAction"),
      children: t("deleteMessage"),
      labels: { confirm: t("confirm"), cancel: t("cancel") },
      confirmProps: { color: "red" },
      centered: true,
      withCloseButton: false,
      onConfirm: () => {
        deleteTopic({
          variables: { where: { id: data.topics[index].id } },
          onCompleted() {
            modals.closeModal(id);
            notifications.showNotification({
              message: t("success"),
              color: "green",
            });
          },
        });
      },
    });
  };

  const editModal = (index: number) => {
    const id = modals.openModal({
      title: t("editTopic"),
      children: (
        <EditTopic
          topic={data.topics[index] as Topic}
          onSubmit={() => {
            modals.closeModal(id);
            notifications.showNotification({
              message: t("success"),
              color: "green",
            });
          }}
          onCancel={() => modals.closeModal(id)}
        />
      ),
    });
  };

  return (
    <Box sx={{ height: "100%" }} m={10}>
      <DataGrid
        headerModifier={t}
        data={data?.topics.map((topic) => ({
          id: topic.id,
          name: topic.name,
          department: topic.department?.name,
          years: topic.years,
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

export default Topics;
