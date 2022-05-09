import {
  Box,
  Text,
  Card,
  Group,
  SimpleGrid,
  Space,
  Table,
  createStyles,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { MdPersonOutline, MdBook } from "react-icons/md";

const styles = createStyles((theme) => ({
  students: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? `${theme.colors.blue[5]}50`
        : theme.colors.blue[5],
    color: "#FFFFFF",
  },
  teachers: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? `${theme.colors.violet[5]}50`
        : theme.colors.violet[5],
    color: "#FFFFFF",
  },
  courses: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? `${theme.colors.red[5]}60`
        : theme.colors.red[5],
    color: "#FFFFFF",
  },
  topics: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? `${theme.colors.green[5]}50`
        : theme.colors.green[5],
    color: "#FFFFFF",
  },
  cardHeader: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[1],
  },
}));

export const Stats = () => {
  const { classes } = styles();
  const { t } = useTranslation();
  return (
    <Box>
      <SimpleGrid
        cols={4}
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        spacing="md"
      >
        <Card shadow="sm" className={classes.students}>
          <Group position="apart">
            <Text size="xl">{t("students")}</Text>
            <MdPersonOutline size={25} />
          </Group>
          <Space h={20} />
          <Text size="xl" weight="bold">
            30
          </Text>
        </Card>
        <Card shadow="sm" className={classes.teachers}>
          <Group position="apart">
            <Text size="xl">{t("teachers")}</Text>
            <MdPersonOutline size={25} />
          </Group>
          <Space h={20} />
          <Text size="xl" weight="bold">
            36
          </Text>
        </Card>
        <Card shadow="sm" className={classes.courses}>
          <Group position="apart">
            <Text size="xl">{t("courses")}</Text>
            <MdBook size={25} />
          </Group>
          <Space h={20} />
          <Text size="xl" weight="bold">
            36
          </Text>
        </Card>
        <Card shadow="sm" className={classes.topics}>
          <Group position="apart">
            <Text size="xl">{t("topics")}</Text>
            <MdBook size={25} />
          </Group>
          <Space h={20} />
          <Text size="xl" weight="bold">
            36
          </Text>
        </Card>
      </SimpleGrid>
      <Space h="xl" />
      <Card withBorder shadow="sm">
        <Card.Section>
          <Text className={classes.cardHeader} p={10}>
            New Students
          </Text>
        </Card.Section>
        <Table></Table>
      </Card>
    </Box>
  );
};

export default Stats;
