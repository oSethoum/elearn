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
  useCreateCourseMutation,
  useTopicsQuery,
} from "@/graphql";

interface EditCourseProps {
  onSubmit?: () => void;
  onCancel?: () => void;
  course: Course;
}

export const EditCourse = ({ onCancel, onSubmit, course }: EditCourseProps) => {
  const { t } = useTranslation();
  const { data } = useTopicsQuery();
  const [createCourse] = useCreateCourseMutation();

  const schema = useMemo(
    () =>
      z.object({
        title: z.string().nonempty(t("notEmpty")),
        description: z.string().nonempty(t("notEmpty")),
        topic: z.string().nonempty(t("notEmpty")),
        year: z.string().nonempty(t("notEmpty")),
      }),
    []
  );

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      title: course.title,
      description: course.description,
      topic: course.topicId?.toString() as string,
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
          createCourse({
            variables: {
              data: {
                title: values.title,
                description: values.description,
                topic: {
                  connect: {
                    id: parseInt(values.topic),
                  },
                },
                year: parseInt(values.year),
              },
            },
            onCompleted() {
              onSubmit?.();
            },
          });
        })}
        noValidate
      >
        <SimpleGrid cols={1} breakpoints={[{ minWidth: "md", cols: 2 }]}>
          <TextInput
            label={t("title")}
            placeholder={t("title")}
            {...form.getInputProps("title")}
          />

          <Textarea
            label={t("description")}
            placeholder={t("description")}
            {...form.getInputProps("description")}
          />

          <Select
            label={t("topic")}
            data={
              data?.topics.map((topic) => ({
                label: topic.name,
                value: topic.id.toString(),
                group: topic.department?.name,
              })) || []
            }
            {...form.getInputProps("topic")}
          />

          <Select
            label={t("year")}
            data={
              makeArray(
                data?.topics.find(
                  (topic) => topic.id === parseInt(form.values.topic)
                )?.years
              ) || []
            }
            {...form.getInputProps("year")}
          />
        </SimpleGrid>
        <Group position="right">
          <Button onClick={onCancel}>{t("cancel")}</Button>
          <Button type="submit" color="blue">
            {t("confirm")}
          </Button>
        </Group>
      </form>
    </Box>
  );
};
