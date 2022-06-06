import {
  Box,
  Button,
  Group,
  Select,
  SimpleGrid,
  TextInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import {
  namedOperations,
  Student,
  useTopicsQuery,
  useUpdateStudentMutation,
} from "@/graphql";
import { useMemo } from "react";

interface EditStudentProps {
  student: Student;
  onSubmit?: () => void;
  onCancel?: () => void;
}

export const EditStudent = ({
  onSubmit,
  onCancel,
  student,
}: EditStudentProps) => {
  const { t } = useTranslation();
  const [updateStudent] = useUpdateStudentMutation();
  const { data } = useTopicsQuery();

  const schema = useMemo(
    () =>
      z.object({
        firstName: z.string().nonempty(t("notEmpty")),
        lastName: z.string().nonempty(t("notEmpty")),
        email: z.string().email(t("invalidEmail")),
        username: z.string().nonempty(t("notEmpty")),
        year: z.string().nonempty(t("notEmpty")),
        topic: z.string().nonempty(t("notEmpty")),
      }),
    []
  );

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      firstName: student.firstName,
      lastName: student.lastName,
      username: student.user.username,
      email: student.user.email,
      year: student.year.toString() as string,
      topic: student.topicId?.toString() as string,
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
    <Box p={10}>
      <form
        onSubmit={form.onSubmit((values) => {
          updateStudent({
            variables: {
              where: {
                id: student.id,
              },
              data: {
                firstName: { set: values.firstName },
                lastName: { set: values.lastName },
                year: { set: parseInt(values.year) },
                topic: {
                  connect: {
                    id: parseInt(values.topic),
                  },
                },
                user: {
                  update: {
                    email: { set: values.email },
                    username: { set: values.username },
                  },
                },
              },
            },
            refetchQueries: [namedOperations.Query.Students],
            onCompleted() {
              onSubmit && onSubmit();
            },
          });
        })}
        noValidate
      >
        <SimpleGrid
          my={10}
          cols={2}
          breakpoints={[{ maxWidth: "md", cols: 1 }]}
        >
          <TextInput
            label={t("firstName")}
            placeholder={t("firstName")}
            {...form.getInputProps("firstName")}
            required
          />

          <TextInput
            label={t("lastName")}
            placeholder={t("lastName")}
            {...form.getInputProps("lastName")}
            required
          />

          {data && (
            <>
              <Select
                label={t("topic")}
                placeholder={t("topic")}
                data={data?.topics.map((topic) => {
                  return {
                    label: topic.name,
                    value: topic.id.toString(),
                    group: topic.department?.name,
                  };
                })}
                {...form.getInputProps("topic")}
              />
              <Select
                label={t("year")}
                placeholder={t("year")}
                data={makeArray(
                  data?.topics.find(
                    (topic) => topic.id === parseInt(form.values.topic)
                  )?.years
                )}
                {...form.getInputProps("year")}
              />
            </>
          )}
          <TextInput
            label={t("username")}
            placeholder={t("username")}
            {...form.getInputProps("username")}
            required
          />

          <TextInput
            label={t("email")}
            placeholder={t("email")}
            {...form.getInputProps("email")}
            required
          />
        </SimpleGrid>
        <Group position="right" mt={20}>
          <Button variant="default" onClick={onCancel}>
            {t("cancel")}
          </Button>
          <Button type="submit" color="green">
            {t("apply")}
          </Button>
        </Group>
      </form>
    </Box>
  );
};
