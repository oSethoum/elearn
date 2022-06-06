import {
  Box,
  Button,
  Group,
  Select,
  SimpleGrid,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useEffect, useMemo } from "react";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import {
  namedOperations,
  useCreateCourseMutation,
  useTopicsQuery,
  useTeachersQuery,
} from "@/graphql";
import { useAppContext } from "@/context";

interface NewCourseProps {
  onSubmit?: () => void;
  onCancel?: () => void;
}

export const NewCourse = ({ onCancel, onSubmit }: NewCourseProps) => {
  const { t } = useTranslation();
  const { data: topicsQuery } = useTopicsQuery();
  const { data: teachersQuery } = useTeachersQuery();
  const [createCourse] = useCreateCourseMutation();
  const { setHeader } = useAppContext();
  useEffect(() => {
    setHeader("courses");
  }, []);

  const schema = useMemo(
    () =>
      z.object({
        title: z.string().nonempty(t("notEmpty")),
        description: z.string().nonempty(t("notEmpty")),
        topic: z.string().nonempty(t("notEmpty")),
        year: z.string().nonempty(t("notEmpty")),
        teacher: z.string().nonempty(t("notEmpty")),
      }),
    []
  );

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      title: "",
      description: "",
      topic: "",
      year: "",
      teacher: "",
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
          console.log(values);

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
                teacher: {
                  connect: {
                    id: parseInt(values.teacher),
                  },
                },
                year: parseInt(values.year),
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
            required
          />

          <Select
            required
            label={t("teacher")}
            placeholder={t("teacher")}
            data={
              teachersQuery?.teachers.map((teacher) => ({
                label: teacher.firstName + " " + teacher.lastName,
                value: teacher.id.toString(),
              })) || []
            }
            {...form.getInputProps("teacher")}
          />

          <Select
            required
            label={t("topic")}
            placeholder={t("topic")}
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
            placeholder={t("year")}
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
          <Button type="submit" color="blue">
            {t("add")}
          </Button>
        </Group>
      </form>
    </Box>
  );
};
