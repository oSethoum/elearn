import { Meeting, useDeleteMeetingMutation } from "@/graphql";
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
import { Link, useNavigate } from "react-router-dom";

const styles = createStyles((theme) => ({
  title: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[2],
  },
}));

export interface MeetingCardProps {
  meeting: Meeting;
  canEdit?: boolean;
  canDelete?: boolean;
  onDelete: () => void;
}

export const MeetingCard = ({
  meeting,
  canEdit,
  canDelete,
  onDelete,
}: MeetingCardProps) => {
  const { classes } = styles();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const modals = useModals();
  const [deleteMeeting] = useDeleteMeetingMutation();

  const _delete = () => {
    modals.openConfirmModal({
      title: t("confirmAction"),
      children: <Text size="sm">{t("deleteMessage")}</Text>,
      labels: { confirm: t("confirm"), cancel: t("cancel") },
      confirmProps: { color: "red" },
      centered: true,
      onConfirm: () =>
        deleteMeeting({
          variables: {
            where: {
              id: meeting.id,
            },
          },
          onCompleted() {
            onDelete();
          },
        }),
    });
  };
  const _edit = () => {
    navigate(`${meeting.id}/edit`);
  };

  return (
    <Card m={10} p={0}>
      <Box className={classes.title} p={10}>
        <Text size="xl" weight="bold">
          {meeting.title}
        </Text>
      </Box>
      <Divider />
      <Box m={10}>
        <Box>{meeting.description || t("noDescription")}</Box>
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
            <Link target="_blank" to={meeting.link as string}>
              <Button color="blue">{t("join")}</Button>
            </Link>
          </Group>
        </Group>
      </Box>
    </Card>
  );
};
