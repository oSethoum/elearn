import {
  Card,
  Image,
  Badge,
  Text,
  Group,
  Box,
  Button,
  useMantineTheme,
  Space,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link } from "react-router-dom";

export interface ICourseCardProps {
  id: string;
  author: string;
  title: string;
  video: Boolean;
  meeting: Boolean;
  src: string;
  description: string;
}

export default function CourseCard({
  id,
  title,
  author,
  video,
  meeting,
  src,
  description,
}: ICourseCardProps) {
  const theme = useMantineTheme();
  const tablet = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
  return (
    <Card
      withBorder
      sx={{
        display: "flex",
        gap: 15,
        flexDirection: tablet ? "column" : "row",
      }}
    >
      <Image mb={-8} src={src} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Text size="xl" weight="bold">
            {title}
          </Text>
          <Space h={10} />
          <Text>{description}</Text>
        </Box>
        <Space h={20} />
        <Group direction="row" style={{ width: "100%" }} position="apart">
          <Group>
            <Text weight="bold">{author}</Text>
          </Group>
          <Group>
            {video && <Badge color="red">Video</Badge>}
            {meeting && <Badge color="blue">Meetings</Badge>}
            <Link to={`/courses/${id}`}>
              <Button style={{ width: 130 }}>Explore</Button>
            </Link>
          </Group>
        </Group>
      </Box>
    </Card>
  );
}
