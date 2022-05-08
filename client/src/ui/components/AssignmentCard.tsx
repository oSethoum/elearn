import { Assignment, useDeleteAssignmentMutation } from "@/graphql";
import {
  Text,
  Card,
  Box,
  Divider,
  createStyles,
  Group,
  Button,
} from "@mantine/core";
import { useModals } from "@mantine/modals";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const styles = createStyles((theme) => ({
  title: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[2],
  },
}));

export interface AssignmentCardProps {
  assignment: Assignment;
  canEdit?: boolean;
  canDelete?: boolean;
  onDelete: () => void;
}

export const AssignmentCard = ({
  assignment,
  canEdit,
  canDelete,
  onDelete,
}: AssignmentCardProps) => {
  const { classes } = styles();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [deleteAssignment] = useDeleteAssignmentMutation();

  const modals = useModals();

  const _delete = () =>
    modals.openConfirmModal({
      title: t("confirmAction"),
      children: <Text size="sm">{t("deleteMessage")}</Text>,
      labels: { confirm: t("confirm"), cancel: t("cancel") },
      confirmProps: { color: "red" },
      centered: true,
      onConfirm: () =>
        deleteAssignment({
          variables: {
            where: {
              id: assignment.id,
            },
          },
          onCompleted() {
            onDelete();
          },
        }),
    });

  const _edit = () => {
    navigate(`${assignment.id}/edit`);
  };

  const _explore = () => {
    navigate(assignment.id.toString());
  };

  return (
    <Card p={0} m={10}>
      <Box className={classes.title} p={10}>
        <Text size="xl" weight="bold">
          {assignment.title}
        </Text>
      </Box>
      <Divider />
      <Box m={10}>
        <Box>{assignment.description || t("noDescription")}</Box>
        <Group position="apart">
          <Text>Hello</Text>
          <Group>
            {!!canDelete && (
              <Button color="red" variant="light" onClick={_delete}>
                {t("delete")}
              </Button>
            )}
            {!!canEdit && (
              <Button color="green" variant="light" onClick={_edit}>
                {t("edit")}
              </Button>
            )}
            <Button color="blue" onClick={_explore}>
              {t("view")}
            </Button>
          </Group>
        </Group>
      </Box>
    </Card>
  );
};
