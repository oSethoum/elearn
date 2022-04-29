import {
  Text,
  Card,
  Box,
  Divider,
  createStyles,
  Group,
  Button,
  BoxProps,
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

export interface LessonCardProps extends BoxProps<"div"> {
  id: string;
  title: string;
  description?: string;
  canEdit?: boolean;
  canDelete?: boolean;
}

export const LessonCard = ({
  id,
  title,
  description,
  canEdit,
  canDelete,
}: LessonCardProps) => {
  const { classes } = styles();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const modals = useModals();

  const _delete = () =>
    modals.openConfirmModal({
      title: "Please confirm your action",
      children: (
        <Text size="sm">Are you sure you want to delete this lesson ?</Text>
      ),
      labels: { confirm: "Confirm", cancel: "Cancel" },
      confirmProps: { color: "red" },
      centered: true,
      onConfirm: () => console.log("Confirmed"),
    });

  const _edit = () => {
    navigate(`lessons/${id}/edit`);
  };

  const _explore = () => {
    navigate("lessons/" + id);
  };

  return (
    <Card shadow="xs" m={10} p={0}>
      <Box className={classes.title} p={10}>
        <Text size="xl" weight="bold">
          {title}
        </Text>
      </Box>
      <Divider />
      <Box m={10}>
        <Box>{description || t("noDescription")}</Box>
        <Group position="right">
          <Group>
            {!!canDelete && (
              <Button color="red" variant="outline" onClick={_delete}>
                {t("delete")}
              </Button>
            )}
            {!!canEdit && (
              <Button color="green" variant="outline" onClick={_edit}>
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
