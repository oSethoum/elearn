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
import { Lesson, useDeleteLessonMutation } from "@/graphql";

const styles = createStyles((theme) => ({
  title: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[2],
  },
}));

export interface LessonCardProps {
  lesson: Lesson;
  canEdit?: boolean;
  canDelete?: boolean;
  onDelete: () => void;
}

export const LessonCard = ({
  lesson,
  canEdit,
  canDelete,
  onDelete,
}: LessonCardProps) => {
  const { classes } = styles();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const modals = useModals();
  const [deleteLesson] = useDeleteLessonMutation();

  const _delete = () =>
    modals.openConfirmModal({
      title: t("confirmAction"),
      children: <Text size="sm">{t("deleteMessage")}</Text>,
      labels: { confirm: t("confirm"), cancel: t("cancel") },
      confirmProps: { color: "red" },
      centered: true,
      onConfirm: () =>
        deleteLesson({
          variables: {
            where: {
              id: lesson.id,
            },
          },
          onCompleted() {
            onDelete();
          },
        }),
    });

  const _edit = () => {
    navigate(`lessons/${lesson.id}/edit`);
  };

  const _explore = () => {
    navigate(`lessons/${lesson.id}`);
  };

  return (
    <Card shadow="xs" m={10} p={0}>
      <Box className={classes.title} p={10}>
        <Text size="xl" weight="bold">
          {lesson.title}
        </Text>
      </Box>
      <Divider />
      <Box m={10}>
        <Box>{lesson.description || t("noDescription")}</Box>
        <Group position="right">
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
