import { Assignment } from "@/graphql";
import {
  Text,
  Card,
  Box,
  Divider,
  createStyles,
  Group,
  Button,
  Space,
} from "@mantine/core";
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

  const _delete = () => onDelete();

  const _edit = () => {
    navigate(`assignments/${assignment.id}/edit`);
  };

  const _explore = () => {
    navigate(`assignments/${assignment.id}`);
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
        <Space h={15} />
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
