import { Box, Group, NumberInput, Space, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import z from "zod";

export const NewAssignment = () => {
  const schema = z.object({
    index: z.number().positive(),
    title: z.string().nonempty(),
    description: z.string(),
  });

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
        <NumberInput {...form.getInputProps("index")} />
        <TextInput {...form.getInputProps("title")} />
        <TextInput {...form.getInputProps("description")} />
        <Space h={10}></Space>
      </Group>
    </Box>
  );
};

export default NewAssignment;
