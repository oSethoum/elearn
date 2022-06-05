import { useAppContext } from "@/context";
import {
  Box,
  Button,
  Group,
  PasswordInput,
  SimpleGrid,
  TextInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { z } from "zod";

interface Props {
  onSubmit?: () => void;
  onCancel?: () => void;
}

export const Profile = ({ onSubmit, onCancel }: Props) => {
  const { user, setUser } = useAppContext();
  const { t } = useTranslation();

  const firstName =
    user?.role == "admin"
      ? user?.admin?.firstName
      : user?.role == "student"
      ? user?.student?.firstName
      : (user?.teacher?.firstName as string);
  const lastName =
    user?.role == "admin"
      ? user?.admin?.lastName
      : user?.role == "student"
      ? user?.student?.lastName
      : (user?.teacher?.lastName as string);

  const schema = useMemo(
    () =>
      z
        .object({
          firstName: z.string().nonempty(t("notEmpty")),
          lastName: z.string().nonempty(t("notEmpty")),
          username: z.string().nonempty(t("notEmpty")),
          email: z.string().email(t("invalidEmail")).nonempty(t("notEmpty")),
          password: z.string(),
          newPassword: z.string(),
          confirmPassword: z.string(),
        })
        .refine((values) => values.newPassword === values.confirmPassword, {
          message: t("passwordDontMatch"),
          path: ["confirmPassword"],
        }),
    []
  );

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      firstName,
      lastName,
      username: user?.username,
      email: user?.email,
      password: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  return (
    <Box>
      <form
        onSubmit={form.onSubmit((values) => {
          fetch("/api/update-user", {
            method: "POST",
            body: JSON.stringify({ id: user?.id, ...values }),
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
          }).then((body) => {
            if (body.status == 200) {
              fetch("/api/refresh", { method: "POST" }).then((res) => {
                if (res.ok) {
                  res.json().then((data) => {
                    setUser(data);
                  });
                }
              });
              onSubmit?.();
            } else if (body.status == 400) {
              form.setFieldError("password", t("wrongPassword"));
            }
          });
        })}
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

          <PasswordInput
            label={t("password")}
            placeholder={t("password")}
            {...form.getInputProps("password")}
          />

          <PasswordInput
            label={t("newPassword")}
            placeholder={t("newPassword")}
            {...form.getInputProps("newPassword")}
          />

          <PasswordInput
            label={t("confirmPassword")}
            placeholder={t("confirmPassword")}
            {...form.getInputProps("confirmPassword")}
          />
        </SimpleGrid>

        <Group position="right" mt={20}>
          <Button onClick={onCancel} variant="default">
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

export default Profile;
