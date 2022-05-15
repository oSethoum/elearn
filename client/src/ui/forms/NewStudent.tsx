import {
  Box,
  Button,
  Group,
  PasswordInput,
  Select,
  SimpleGrid,
  TextInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import {
  namedOperations,
  useCreateStudentMutation,
  useTopicsQuery,
} from "@/graphql";
import { useEffect, useMemo } from "react";
import { Loader } from "@/ui/components";

interface NewStudentProps {
  onSubmit?: () => void;
  onCancel?: () => void;
}

export const NewStudent = ({ onSubmit, onCancel }: NewStudentProps) => {
  const { t } = useTranslation();
  const [createStudent] = useCreateStudentMutation();
  const { data, loading } = useTopicsQuery();

  const schema = useMemo(
    () =>
      z
        .object({
          firstName: z.string().nonempty(t("notEmpty")),
          lastName: z.string().nonempty(t("notEmpty")),
          email: z.string().email(t("invalidEmail")),
          username: z.string().nonempty(t("notEmpty")),
          password: z.string().nonempty(t("notEmpty")),
          confirmPassword: z.string().nonempty(t("notEmpty")),
          grade: z.string().nonempty(t("notEmpty")),
          topic: z.string().nonempty(t("notEmpty")),
        })
        .refine((data) => data.password === data.confirmPassword, {
          message: t("passwordsDontMatch"),
          path: ["confirmPassword"],
        }),
    []
  );

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      grade: "",
      topic: "",
    },
  });

  useEffect(() => {
    form.setFieldValue("grade", "1");
  }, [form.values.topic]);

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
          createStudent({
            variables: {
              data: {
                firstName: values.firstName,
                lastName: values.lastName,
                grade: parseInt(values.grade),
                topic: {
                  connect: {
                    id: parseInt(values.topic),
                  },
                },
                user: {
                  create: {
                    disabled: false,
                    email: values.email,
                    password: values.password,
                    role: "student",
                    username: values.username,
                  },
                },
              },
            },
            refetchQueries: [namedOperations.Query.DashboardUsers],
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
          />

          <TextInput
            label={t("lastName")}
            placeholder={t("lastName")}
            {...form.getInputProps("lastName")}
          />

          <Select
            label={t("topic")}
            // @ts-ignore
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
            label={t("grade")}
            data={
              makeArray(
                data?.topics.find(
                  (topic) => topic.id === parseInt(form.values.topic)
                )?.grades
              ) || []
            }
            {...form.getInputProps("grade")}
          />

          <TextInput
            label={t("username")}
            placeholder={t("username")}
            {...form.getInputProps("username")}
          />

          <TextInput
            label={t("email")}
            placeholder={t("email")}
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label={t("password")}
            placeholder={t("password")}
            {...form.getInputProps("password")}
          />
          <PasswordInput
            label={t("confirmPassword")}
            placeholder={t("confirmPassword")}
            {...form.getInputProps("confirmPassword")}
          />
        </SimpleGrid>
        <Group position="right">
          <Button variant="default" onClick={onCancel}>
            {t("cancel")}
          </Button>
          <Button type="submit">{t("add")}</Button>
        </Group>
      </form>
    </Box>
  );
};
