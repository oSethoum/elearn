import { Box, Group, NumberInput, Space, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useTranslation } from "react-i18next";
import z from "zod";

export const NewAssignment = () => {
  const schema = z.object({
    index: z.number().positive(),
    title: z.string().nonempty(),
    description: z.string(),
  });

  const { t } = useTranslation();

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      index: null,
      title: "",
      description: "",
    },
  });

  return (
    <Box p={10}>
      <Group grow>
        <NumberInput
          label={t("index")}
          placeholder={t("index")}
          {...form.getInputProps("index")}
        />
        <TextInput
          label={t("title")}
          placeholder={t("title")}
          {...form.getInputProps("title")}
        />
        <TextInput
          label={t("description")}
          placeholder={t("description")}
          {...form.getInputProps("description")}
        />
      </Group>
    </Box>
  );
};

export default NewAssignment;
