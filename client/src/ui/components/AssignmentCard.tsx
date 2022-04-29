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

export interface AssignmentCardProps extends BoxProps<"div"> {
  id: string;
  title: string;
  description?: string;
  canEdit?: boolean;
  canDelete?: boolean;
}

export const AssignmentCard = ({
  id,
  title,
  description,
  canDelete,
}: AssignmentCardProps) => {
  const { classes } = styles();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const _delete = () => {
    //TODO: show confirmation model
    // show notification in case of deletion
  };
  const _explore = () => {
    navigate("assignments/" + id);
  };

  return (
    <Card p={0}>
      <Box className={classes.title} m={10}>
        <Text size="xl" weight="bold">
          {title}
        </Text>
      </Box>
      <Divider />
      <Box m={10}>
        <Box>{description || t("noDescription")}</Box>
        <Group position="apart">
          <Text>Hello</Text>
          <Group>
            {!!canDelete && (
              <Button color="red" onClick={_delete}>
                {t("delete")}
              </Button>
            )}
            <Button color="blue" onClick={_explore}>
              {t("explore")}
            </Button>
          </Group>
        </Group>
      </Box>
    </Card>
  );
};
