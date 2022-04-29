import { Box, TextInput, Select, Group, Textarea, Switch } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import z from "zod";
import { useQuery, useMutation, gql } from "@apollo/client";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Loader } from "../components";

interface Props {
  onSuccess: () => void;
}

export const EditCourse = ({ onSuccess }: Props) => {
  const { t } = useTranslation();
  const { data, loading } = useQuery(gql`
    query {
      topics {
        id
        name
        grades
        department {
          id
          name
        }
      }

      teachers {
        id
        firstName
        lastName
      }
    }
  `);

  if (loading) return <Loader />;

  const schema = z.object({
    title: z.string(),
    description: z.string().nonempty(t("notEmpty")),
    published: z.boolean(),
    grade: z.string(),
    teacherId: z.number(),
    topicId: z.number(),
  });

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      title: "",
      description: "",
      published: false,
      grade: "",
      teacherId: 1,
      topicId: 1,
    },
  });

  const [grades, setGrades] = useState<string[]>([]);

  const [addCourse, { error }] = useMutation(
    gql`
      mutation createCourse($course: CourseInput!) {
        createCourse(course: $course) {
          id
        }
      }
    `
  );

  useEffect(() => {
    const currentTopic = data?.topics.find(
      (t) => t.value === form.values.topicId
    );
    const computerGrades: string[] = [];

    if (currentTopic) {
      for (let i = 1; i <= currentTopic.grades; i++) {
        computerGrades.push(i.toString());
      }
    }
    setGrades(computerGrades);
    form.values.grade = "1";
  }, [form.values.topicId]);

  return (
    <Box>
      <form
        onSubmit={form.onSubmit(async (values) => {
          const { topicId, teacherId, grade, ...others } = values;
          addCourse({
            variables: {
              teacher: {
                connect: {
                  id: teacherId,
                },
              },
              topic: {
                connect: {
                  id: topicId,
                },
              },
              grade: grade,
              ...others,
            },
          });
          onSuccess();
        })}
      >
        <Group>
          <TextInput label={t("title")} {...form.getInputProps("title")} />
          <Textarea
            label={t("description")}
            {...form.getInputProps("description")}
          />
          <Select
            label={t("topic")}
            data={data.topics.map((t) => {
              return {
                label: t.name,
                value: t.id,
                group: t.department.name,
              };
            })}
          />

          <Select
            label={t("grade")}
            placeholder={t("grade")}
            data={grades}
            {...form.getInputProps("grade")}
          />

          <Select
            label={t("teacher")}
            searchable
            data={data.teachers.map((teacher) => {
              return {
                label: teacher.firstName + " " + teacher.lastName,
                value: teacher.id,
              };
            })}
          />
          <Switch label={t("published")} {...form.getInputProps("published")} />
        </Group>
      </form>
    </Box>
  );
};

export default EditCourse;
