import { Box, Button, Group, TextInput } from "@mantine/core";
import { useMemo } from "react";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import {
  Department,
  namedOperations,
  useUpdateDepartmentMutation,
} from "@/graphql";

interface EditDepartmentProps {
  onSubmit?: () => void;
  onCancel?: () => void;
  department: Department;
}

export const EditDepartments = ({
  onCancel,
  onSubmit,
  department,
}: EditDepartmentProps) => {
  const { t } = useTranslation();
  const [updateDepartment] = useUpdateDepartmentMutation();
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
      name: department.name,
    },
  });

  return (
    <Box>
      <form
        onSubmit={form.onSubmit((values) => {
          updateDepartment({
            variables: {
              where: {
                id: department.id,
              },
              data: {
                name: { set: values.name },
              },
            },
            refetchQueries: [namedOperations.Query.Departments],
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
          required
        />

        <Group position="right" mt="lg">
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
