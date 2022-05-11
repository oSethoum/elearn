import { DataGrid } from "@/ui/components";
import {
  Box,
  Text,
  Card,
  Group,
  SimpleGrid,
  Space,
  createStyles,
  Button,
} from "@mantine/core";
import { useState } from "react";
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
        ? theme.colors.dark[9]
        : theme.colors.gray[1],
  },
}));

export const Stats = () => {
  const { classes } = styles();
  const { t } = useTranslation();
  const [approveStudents, setApproveStudents] = useState(false);
  const [approveTeachers, setApproveTeachers] = useState(false);
  return (
    <Box>
      <SimpleGrid
        cols={4}
        breakpoints={[{ maxWidth: "sm", cols: 2 }]}
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
      <Card p={0} withBorder shadow="sm">
        <Card.Section>
          <Group p={10} position="apart">
            <Text size="xl" weight="bold">
              {t("newStudents")}
            </Text>
            <Button disabled>{t("approve")}</Button>
          </Group>
        </Card.Section>
        <DataGrid
          height={250}
          headerModifier={t}
          onSelectionChanged={(selected) => {
            console.log(selected);
          }}
          data={[
            { name: "John Doe", age: "20", course: "math", grade: "A", id: 1 },
            { name: "John Doe", age: "20", course: "math", grade: "A", id: 1 },
            { name: "John Doe", age: "20", course: "math", grade: "A", id: 1 },
            { name: "John Doe", age: "20", course: "math", grade: "A", id: 1 },
            { name: "John Doe", age: "20", course: "math", grade: "A", id: 1 },
            { name: "John Doe", age: "20", course: "math", grade: "A", id: 1 },
            { name: "John Doe", age: "20", course: "math", grade: "A", id: 1 },
            { name: "John Doe", age: "20", course: "math", grade: "A", id: 1 },
            { name: "John Doe", age: "20", course: "math", grade: "A", id: 1 },
          ]}
          highlightOnHover
          verticalSpacing="sm"
        />
      </Card>
      <Space h={50} />
      <Card p={0} withBorder shadow="sm">
        <Card.Section>
          <Group p={10} position="apart">
            <Text size="xl" weight="bold">
              {t("newTeachers")}
            </Text>
            <Button disabled>{t("approve")}</Button>
          </Group>
        </Card.Section>
        <DataGrid
          height={250}
          headerModifier={t}
          data={[
            { name: "John Doe", age: "20", course: "math", grade: "A", id: 1 },
            { name: "John Doe", age: "20", course: "math", grade: "A", id: 1 },
            { name: "John Doe", age: "20", course: "math", grade: "A", id: 1 },
            { name: "John Doe", age: "20", course: "math", grade: "A", id: 1 },
            { name: "John Doe", age: "20", course: "math", grade: "A", id: 1 },
            { name: "John Doe", age: "20", course: "math", grade: "A", id: 1 },
            { name: "John Doe", age: "20", course: "math", grade: "A", id: 1 },
            { name: "John Doe", age: "20", course: "math", grade: "A", id: 1 },
            { name: "John Doe", age: "20", course: "math", grade: "A", id: 1 },
          ]}
          highlightOnHover
          verticalSpacing="sm"
        />
      </Card>
      <Space h={50} />
    </Box>
  );
};

export default Stats;
