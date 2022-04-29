import {
  Card,
  Badge,
  Text,
  Group,
  Box,
  Button,
  useMantineTheme,
  Divider,
  Tooltip,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export interface ICourseCardProps {
  id: string;
  author: string;
  title: string;
  meeting: Boolean;
  lessons: number;
  assignments: number;
  description: string;
  canEdit?: boolean;
  canDelete?: boolean;
}

export default function CourseCard({
  id,
  title,
  author,
  assignments,
  lessons,
  description,
  canEdit,
  canDelete,
}: ICourseCardProps) {
  const { colors, colorScheme } = useMantineTheme();
  const { t } = useTranslation();
  return (
    <Card shadow="xs" p={0}>
      <Box
        sx={{
          backgroundColor:
            colorScheme === "dark" ? colors.dark[5] : colors.gray[2],
        }}
      >
        <Text p={10} weight="bold" size="lg">
          {title}
        </Text>
      </Box>
      <Divider />
      <Box p={10} sx={{ minHeight: 50 }}>
        <Text> {description || t("noDescription")} </Text>
        <Group align="flex-end" mt={20} position="apart">
          <Text>{author || t("noAuthor")}</Text>
          <Group>
            <Tooltip label={t("lessons")}>
              <Badge color="red" size="lg">
                {lessons}
              </Badge>
            </Tooltip>
            <Tooltip label={t("assignments")}>
              <Badge color="green" size="lg">
                {assignments}
              </Badge>
            </Tooltip>
          </Group>
          <Group>
            {!!canDelete && <Button color="red">{t("delete")}</Button>}
            {!!canEdit && (
              <Link tabIndex={-1} to={`/courses/${id}`}>
                <Button color="green">{t("edit")}</Button>
              </Link>
            )}
            <Link tabIndex={-1} to={`/courses/${id}`}>
              <Button>{t("view")}</Button>
            </Link>
          </Group>
        </Group>
      </Box>
    </Card>
  );
}
