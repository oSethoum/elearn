import {
  Box,
  Button,
  Group,
  PasswordInput,
  SimpleGrid,
  TextInput,
} from "@mantine/core";
import { useMemo } from "react";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { namedOperations, useCreateTeacherMutation } from "@/graphql";

interface NewTeacherProps {
  onSubmit?: () => void;
  onCancel?: () => void;
}

export const NewTeacher = ({ onCancel, onSubmit }: NewTeacherProps) => {
  const { t } = useTranslation();
  const [createTeacher] = useCreateTeacherMutation();
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
        })
        .refine((data) => data.password === data.confirmPassword, {
          message: t("passwordDontMatch"),
          path: ["confirmPassword"],
        }),
    []
  );
  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <Box>
      <form
        onSubmit={form.onSubmit((values) => {
          createTeacher({
            variables: {
              data: {
                firstName: values.firstName,
                lastName: values.lastName,
                user: {
                  create: {
                    username: values.username,
                    password: values.password,
                    email: values.email,
                    disabled: false,
                    role: "teacher",
                  },
                },
              },
            },
            refetchQueries: [namedOperations.Query.Teachers],
            onCompleted() {
              onSubmit && onSubmit();
            },
          });
        })}
        noValidate
      >
        <SimpleGrid cols={1} breakpoints={[{ minWidth: "md", cols: 2 }]}>
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
          <TextInput
            label={t("email")}
            placeholder={t("email")}
            {...form.getInputProps("email")}
            required
          />
          <TextInput
            label={t("username")}
            placeholder={t("username")}
            {...form.getInputProps("username")}
            required
          />
          <PasswordInput
            label={t("password")}
            placeholder={t("password")}
            {...form.getInputProps("password")}
            required
          />
          <PasswordInput
            label={t("confirmPassword")}
            placeholder={t("confirmPassword")}
            {...form.getInputProps("confirmPassword")}
            required
          />
        </SimpleGrid>
        <Group position="right" mt={20}>
          <Button onClick={onCancel} variant="default">
            {t("cancel")}
          </Button>
          <Button type="submit">{t("add")}</Button>
        </Group>
      </form>
    </Box>
  );
};
