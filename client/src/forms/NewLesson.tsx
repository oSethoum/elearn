import {
  Box,
  Group,
  NumberInput,
  Space,
  Switch,
  TextInput,
} from "@mantine/core";
import { RichTextEditor } from "@mantine/rte";
import { useForm, zodResolver } from "@mantine/form";
import z from "zod";

export const NewLesson = () => {
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
      published: false,
      content: "",
    },
  });

  return (
    <Box p={10}>
      <form onSubmit={form.onSubmit((values) => {})} noValidate>
        <Group grow direction="column">
          <NumberInput {...form.getInputProps("index")} />
          <TextInput {...form.getInputProps("title")} />
          <TextInput {...form.getInputProps("description")} />
          <Switch {...form.getInputProps("published")} />
          <RichTextEditor {...form.getInputProps("content")} />
        </Group>
      </form>
    </Box>
  );
};

export default NewLesson;
