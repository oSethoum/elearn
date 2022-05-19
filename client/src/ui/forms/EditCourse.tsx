import {
  Box,
  Button,
  Group,
  Select,
  SimpleGrid,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useMemo } from "react";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import {
  Course,
  namedOperations,
  useUpdateCourseMutation,
  useTeachersQuery,
  useTopicsQuery,
} from "@/graphql";

interface EditCourseProps {
  onSubmit?: () => void;
  onCancel?: () => void;
  course: Course;
}

export const EditCourse = ({ onCancel, onSubmit, course }: EditCourseProps) => {
  const { t } = useTranslation();
  const { data: topicsQuery } = useTopicsQuery();
  const { data: teachersQuery } = useTeachersQuery();
  const [editCourse] = useUpdateCourseMutation();

  const schema = useMemo(
    () =>
      z.object({
        title: z.string().nonempty(t("notEmpty")),
        description: z.string(),
        topic: z.string().nonempty(t("notEmpty")),
        year: z.string().nonempty(t("notEmpty")),
        teacher: z.string().nonempty(),
      }),
    []
  );

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      title: course.title,
      description: course.description || "",
      topic: course.topicId?.toString() as string,
      teacher: "1",
      year: course.year.toString(),
    },
  });

  const makeArray = (max?: number) => {
    const arr: string[] = [];
    if (max) {
      for (let i = 1; i <= max; i++) {
        arr.push(i.toString());
      }
    }
    return arr;
  };

  return (
    <Box>
      <form
        onSubmit={form.onSubmit((values) => {
          editCourse({
            variables: {
              where: {
                id: course.id,
              },
              data: {
                title: { set: values.title },
                description: { set: values.description },
                topic: {
                  connect: {
                    id: parseInt(values.topic),
                  },
                },
                teacher: {
                  connect: {
                    id: parseInt(values.teacher),
                  },
                },
                year: { set: parseInt(values.year) },
              },
            },
            refetchQueries: [namedOperations.Query.Courses],
            onCompleted() {
              onSubmit?.();
            },
          });
        })}
        noValidate
      >
        <SimpleGrid
          cols={1}
          breakpoints={[{ minWidth: "md", cols: 2 }]}
          mb={10}
        >
          <TextInput
            label={t("title")}
            placeholder={t("title")}
            {...form.getInputProps("title")}
          />

          <Select
            label={t("teacher")}
            required
            data={
              teachersQuery?.teachers.map((teacher) => ({
                label: teacher.firstName + " " + teacher.lastName,
                value: teacher.id.toString(),
              })) || []
            }
            {...form.getInputProps("teacher")}
          />

          <Select
            label={t("topic")}
            required
            data={
              topicsQuery?.topics.map((topic) => ({
                label: topic.name,
                value: topic.id.toString(),
                group: topic.department?.name,
              })) || []
            }
            {...form.getInputProps("topic")}
          />

          <Select
            label={t("year")}
            required
            data={
              makeArray(
                topicsQuery?.topics.find(
                  (topic) => topic.id === parseInt(form.values.topic)
                )?.years
              ) || []
            }
            {...form.getInputProps("year")}
          />
        </SimpleGrid>
        <Textarea
          label={t("description")}
          placeholder={t("description")}
          {...form.getInputProps("description")}
        />
        <Group mt={20} position="right">
          <Button variant="default" onClick={onCancel}>
            {t("cancel")}
          </Button>
          <Button color="green" type="submit">
            {t("apply")}
          </Button>
        </Group>
      </form>
    </Box>
  );
};
