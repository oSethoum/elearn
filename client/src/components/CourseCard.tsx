import {
  Card,
  Image,
  Badge,
  Text,
  Group,
  Box,
  Button,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

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
      <Group spacing="xl" direction="column">
        <Box>
          <Text size="xl" weight="bold">
            {title}
          </Text>
          <Text>{description}</Text>
        </Box>
        <Group direction="row" style={{ width: "100%" }} position="apart">
          <Group>
            <Text weight="bold">{author}</Text>
          </Group>
          <Group>
            {video && <Badge color="red">Video</Badge>}
            {meeting && <Badge color="blue">Meetings</Badge>}
            <Button style={{ width: 130 }}>Explore</Button>
          </Group>
        </Group>
      </Group>
    </Card>
  );
}
