import { Box, Button, Group, TextInput } from "@mantine/core";
import { useMemo } from "react";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { useCreateDepartmentMutation } from "@/graphql";

interface NewDepartmentProps {
  onSubmit?: () => void;
  onCancel?: () => void;
}

export const NewDepartments = ({ onCancel, onSubmit }: NewDepartmentProps) => {
  const { t } = useTranslation();
  const [createDepartment] = useCreateDepartmentMutation();
  const schema = useMemo(
    () =>
      z.object({
        name: z.string().nonempty("nonEmpty"),
      }),
    []
  );
  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      name: "",
    },
  });

  return (
    <Box>
      <form
        onSubmit={form.onSubmit((values) => {
          createDepartment({
            variables: {
              data: {
                name: values.name,
              },
            },
            onCompleted() {
              onSubmit?.();
            },
          });
        })}
        noValidate
      >
        <TextInput
          label={t("name")}
          placeholder={t("name")}
          {...form.getInputProps("name")}
        />

        <Group>
          <Button onClick={onCancel}>{t("cancel")}</Button>
          <Button type="submit">{t("add")}</Button>
        </Group>
      </form>
    </Box>
  );
};
