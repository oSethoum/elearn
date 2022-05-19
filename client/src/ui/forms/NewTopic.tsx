import {
  namedOperations,
  useCreateTopicMutation,
  useDepartmentsQuery,
} from "@/graphql";
import {
  Box,
  Button,
  Group,
  NumberInput,
  Select,
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

export const NewTopic = ({ onSubmit, onCancel }: Props) => {
  const { t } = useTranslation();
  const schema = useMemo(
    () =>
      z.object({
        name: z.string(),
        years: z.number().positive("cannotBeNegative"),
      }),
    []
  );

  const { data } = useDepartmentsQuery();
  const [createTopic] = useCreateTopicMutation();

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      name: "",
      department: "1",
      years: 1,
    },
  });

  return (
    <Box>
      <form
        onSubmit={form.onSubmit((values) =>
          createTopic({
            variables: {
              data: {
                name: values.name,
                years: values.years,
                department: {
                  connect: {
                    id: parseInt(values.department as string),
                  },
                },
              },
            },
            refetchQueries: [namedOperations.Query.Topics],
            onCompleted() {
              onSubmit?.();
            },
          })
        )}
      >
        <SimpleGrid>
          <TextInput
            label={t("name")}
            placeholder={t("name")}
            {...form.getInputProps("name")}
            required
          />

          <Select
            label={t("department")}
            data={
              data?.departments.map((d) => ({
                label: d.name,
                value: d.id.toString(),
              })) || []
            }
            required
            {...form.getInputProps("department")}
          />

          <NumberInput
            label={t("years")}
            {...form.getInputProps("years")}
            required
          />
        </SimpleGrid>
        <Group mt={20} position="right">
          <Button onClick={onCancel} variant="default">
            {t("cancel")}
          </Button>
          <Button type={"submit"}>{t("add")}</Button>
        </Group>
      </form>
    </Box>
  );
};
