import {
  useStatePageDataQuery,
  useUpdateManyUserMutation,
  namedOperations,
} from "@/graphql";
import { DataGrid, Loader } from "@/ui/components";
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
  const [selectedStudents, setSelectedStudents] = useState<number[]>([]);
  const [selectedTeachers, setSelectedTeachers] = useState<number[]>([]);
  const [updateUsers] = useUpdateManyUserMutation();

  let { data, loading } = useStatePageDataQuery({
    variables: {
      swhere: {
        user: {
          is: {
            disabled: {
              equals: true,
            },
          },
        },
      },
      twhere: {
        user: {
          is: {
            disabled: {
              equals: true,
            },
          },
        },
      },
    },
  });

  if (loading) return <Loader height={"85vh"} />;

  return (
    <Box>
      <SimpleGrid
        cols={4}
        breakpoints={[{ maxWidth: "sm", cols: 2 }]}
        spacing="md"
      >
        <>
          <Card shadow="sm" className={classes.students}>
            <Group position="apart">
              <Text size="xl">{t("students")}</Text>
              <MdPersonOutline size={25} />
            </Group>
            <Space h={20} />
            <Text size="xl" weight="bold">
              {data?.aggregateStudent._count?._all}
            </Text>
          </Card>
          <Card shadow="sm" className={classes.teachers}>
            <Group position="apart">
              <Text size="xl">{t("teachers")}</Text>
              <MdPersonOutline size={25} />
            </Group>
            <Space h={20} />
            <Text size="xl" weight="bold">
              {data?.aggregateTeacher._count?._all}
            </Text>
          </Card>
          <Card shadow="sm" className={classes.courses}>
            <Group position="apart">
              <Text size="xl">{t("courses")}</Text>
              <MdBook size={25} />
            </Group>
            <Space h={20} />
            <Text size="xl" weight="bold">
              {data?.aggregateCourse._count?._all}
            </Text>
          </Card>
          <Card shadow="sm" className={classes.topics}>
            <Group position="apart">
              <Text size="xl">{t("topics")}</Text>
              <MdBook size={25} />
            </Group>
            <Space h={20} />
            <Text size="xl" weight="bold">
              {data?.aggregateTopic._count?._all}
            </Text>
          </Card>
        </>
      </SimpleGrid>
      <Space h="xl" />
      <Card p={0} withBorder shadow="sm">
        <Card.Section>
          <Group p={10} position="apart">
            <Text size="xl" weight="bold">
              {t("newStudents")}
            </Text>
            <Button
              disabled={selectedStudents.length == 0}
              onClick={() => {
                const ids = selectedStudents.map(
                  (index: number) => data?.students[index].user.id
                ) as number[];
                updateUsers({
                  variables: {
                    where: {
                      id: {
                        in: ids,
                      },
                    },
                    data: {
                      disabled: {
                        set: false,
                      },
                    },
                  },
                  refetchQueries: [namedOperations.Query.statePageData],
                });
                setSelectedStudents([]);
              }}
            >
              {t("approve")}
            </Button>
          </Group>
        </Card.Section>
        <DataGrid
          height={250}
          withSelection
          headerModifier={t}
          selectedIndexes={selectedStudents}
          setSelectedIndexes={setSelectedStudents}
          data={
            data?.students.map(
              (student) =>
                ({
                  username: student.user.username,
                  firstName: student.lastName,
                  lastName: student.lastName,
                  email: student.user.email,
                  year: student.year,
                  topic: student.topic?.name,
                  createdAt: student.user.createdAt,
                } as object)
            ) as object[]
          }
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
            <Button
              disabled={selectedTeachers.length == 0}
              onClick={() => {
                const ids = selectedTeachers.map(
                  (index: number) => data?.teachers[index].user.id
                ) as number[];
                updateUsers({
                  variables: {
                    where: {
                      id: {
                        in: ids,
                      },
                    },
                    data: {
                      disabled: {
                        set: false,
                      },
                    },
                  },
                  refetchQueries: [namedOperations.Query.statePageData],
                });
                setSelectedTeachers([]);
              }}
            >
              {t("approve")}
            </Button>
          </Group>
        </Card.Section>
        <DataGrid
          height={250}
          headerModifier={t}
          withSelection
          selectedIndexes={selectedTeachers}
          setSelectedIndexes={setSelectedTeachers}
          data={
            data?.teachers.map(
              (teacher) =>
                ({
                  firstName: teacher.firstName,
                  lastName: teacher.lastName,
                  username: teacher.user.username,
                  email: teacher.user.email,
                  createdAt: teacher.user.createdAt,
                } as object)
            ) as object[]
          }
          highlightOnHover
          verticalSpacing="sm"
        />
      </Card>
      <Space h={50} />
    </Box>
  );
};

export default Stats;
