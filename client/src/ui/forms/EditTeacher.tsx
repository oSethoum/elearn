import { Box, Button, Group, SimpleGrid, TextInput } from "@mantine/core";
import { useMemo } from "react";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { namedOperations, Teacher, useUpdateTeacherMutation } from "@/graphql";

interface EditTeacherProps {
  onSubmit?: () => void;
  onCancel?: () => void;
  teacher: Teacher;
}

export const EditTeacher = ({
  onCancel,
  onSubmit,
  teacher,
}: EditTeacherProps) => {
  const { t } = useTranslation();
  const [updateTeacher] = useUpdateTeacherMutation();
  const schema = useMemo(
    () =>
      z.object({
        firstName: z.string().nonempty(t("notEmpty")),
        lastName: z.string().nonempty(t("notEmpty")),
        email: z.string().email(t("invalidEmail")),
        username: z.string().nonempty(t("notEmpty")),
      }),
    []
  );
  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      firstName: teacher.firstName,
      lastName: teacher.lastName,
      email: teacher.user.email,
      username: teacher.user.username,
    },
  });

  return (
    <Box>
      <form
        onSubmit={form.onSubmit((values) => {
          updateTeacher({
            variables: {
              where: {
                id: teacher.id,
              },
              data: {
                firstName: { set: values.firstName },
                lastName: { set: values.lastName },
                user: {
                  update: {
                    username: { set: values.username },
                    email: { set: values.email },
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
        <SimpleGrid cols={1} breakpoints={[{ minWidth: "md", cols: 2 }]}>
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
        </SimpleGrid>
        <Group position="right" mt={20}>
          <Button onClick={onCancel} variant="default">
            {t("cancel")}
          </Button>
          <Button type="submit">{t("apply")}</Button>
        </Group>
      </form>
    </Box>
  );
};
