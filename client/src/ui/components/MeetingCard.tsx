import { Meeting, useDeleteMeetingMutation } from "@/graphql";
import {
  Text,
  Card,
  Box,
  Divider,
  createStyles,
  Group,
  Button,
  Space,
  Badge,
  Tooltip,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { useAppContext } from "@/context";
import "dayjs/locale/fr";
import "dayjs/locale/ar-dz";

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
  const { language } = useAppContext();
  const navigate = useNavigate();
  const _delete = () => onDelete();
  const _edit = () => {
    navigate(`meetings/${meeting.id}/edit`);
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
        <Space h={15} />
        <Group position="apart">
          <Tooltip label={t("date")}>
            <Badge size="lg" color="green">
              {dayjs(meeting.date)
                .locale(language == "ar" ? "ar-dz" : language)
                .format("DD-MMMM-YYYY")}
              {"  "}
              {dayjs(meeting.startTime)
                .locale(language == "ar" ? "ar-dz" : language)
                .format("HH:mm")}
            </Badge>
          </Tooltip>
          <Tooltip label={t("duration")}>
            <Badge size="lg">
              {dayjs(meeting.duration)
                .locale(language == "ar" ? "ar-dz" : language)
                .format("HH:mm")}
            </Badge>
          </Tooltip>
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
