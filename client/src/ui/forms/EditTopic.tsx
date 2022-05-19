import {
  namedOperations,
  Topic,
  useDepartmentsQuery,
  useTopicsQuery,
  useUpdateTopicMutation,
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
  topic: Topic;
}

export const EditTopic = ({ onSubmit, onCancel, topic }: Props) => {
  const { t } = useTranslation();
  const schema = useMemo(
    () =>
      z.object({
        name: z.string(),
      }),
    []
  );

  const { data } = useDepartmentsQuery();
  const [updateTopic] = useUpdateTopicMutation();

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      name: topic.name,
      department: topic.department?.id.toString() as string,
      years: topic.years,
    },
  });

  return (
    <Box>
      <form
        onSubmit={form.onSubmit((values) => {
          console.log(values);

          updateTopic({
            variables: {
              where: {
                id: topic.id,
              },
              data: {
                name: {
                  set: values.name,
                },
                years: {
                  set: values.years,
                },
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
          });
        })}
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
            {...form.getInputProps("department")}
            required
          />
          <NumberInput label={t("years")} {...form.getInputProps("years")} />
        </SimpleGrid>
        <Group mt={20} position="right">
          <Button onClick={onCancel} variant="default">
            {t("cancel")}
          </Button>
          <Button type={"submit"} color="green">
            {t("apply")}
          </Button>
        </Group>
      </form>
    </Box>
  );
};
