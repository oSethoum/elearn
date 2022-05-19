import { ActionIcon, Box, Button, Group } from "@mantine/core";
import {
  namedOperations,
  Topic,
  useDeleteTopicMutation,
  useTopicsQuery,
} from "@/graphql";
import { DataGrid, Loader } from "@/ui/components";
import { MdDelete, MdEdit } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useModals } from "@mantine/modals";
import { useNotifications } from "@mantine/notifications";
import { EditTopic } from "@/ui/forms/EditTopic";
import { useEffect } from "react";
import { useAppContext } from "@/context";
import { NewTopic } from "@/ui/forms/NewTopic";

export const Topics = () => {
  const { data } = useTopicsQuery();
  const { t } = useTranslation();
  const [deleteTopic] = useDeleteTopicMutation();
  const modals = useModals();
  const notifications = useNotifications();
  const { setHeader } = useAppContext();
  useEffect(() => {
    setHeader("topics");
  }, []);

  if (!data) return <Loader height={"80vh"} />;

  const addModal = () => {
    const id = modals.openModal({
      title: t("addTopic"),
      size: "xl",
      children: (
        <NewTopic
          onCancel={() => {
            modals.closeModal(id);
          }}
          onSubmit={() => {
            modals.closeModal(id);
            notifications.showNotification({
              message: t("success"),
              color: "green",
            });
          }}
        />
      ),
    });
  };

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
          refetchQueries: [namedOperations.Query.Topics],
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
      size: "xl",
      children: (
        <EditTopic
          topic={data.topics[index] as Topic}
          onSubmit={() => {
            modals.closeModal(id);
            notifications.showNotification({
              message: t("success"),
              color: "green",
            });
            console.log(data.topics[index]);
          }}
          onCancel={() => modals.closeModal(id)}
        />
      ),
    });
  };

  return (
    <Box sx={{ height: "100%" }} m={10}>
      <Button onClick={addModal} mb={20}>
        {t("addTopic")}
      </Button>
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
