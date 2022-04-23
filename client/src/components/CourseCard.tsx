import {
  Card,
  Badge,
  Text,
  Group,
  Box,
  Button,
  useMantineTheme,
  Space,
  Paper,
  Divider,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export interface ICourseCardProps {
  id: string;
  author: string;
  title: string;
  meeting: Boolean;
  description: string;
}

export default function CourseCard({
  id,
  title,
  author,
  meeting,
  description,
}: ICourseCardProps) {
  const theme = useMantineTheme();
  const { t } = useTranslation();
  const tablet = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
  return (
    <Card shadow="xs">
      <Text weight="bold" size="lg">
        {title}
      </Text>
      <Divider my={5} />
      <Box sx={{ minHeight: 50 }}>
        <Text> {description || t("noDescription")} </Text>
        <Group mt={20} position="apart">
          <Text>{author || t("noAuthor")}</Text>
          <Link to={`/courses/${id}`}>
            <Button>{t("explore")}</Button>
          </Link>
        </Group>
      </Box>
    </Card>
  );
}
