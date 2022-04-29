import { Box, Group, NumberInput, Space, TextInput } from "@mantine/core";
import { DatePicker, TimeInput } from "@mantine/dates";
import { useForm, zodResolver } from "@mantine/form";
import z from "zod";

export const NewMeeting = () => {
  const schema = z.object({
    index: z.number().positive("Index must be a positive number"),
    title: z.string().nonempty(),
    description: z.string(),
  });

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      index: "",
      title: "",
      description: "",
      date: "",
      time: "",
      duration: "",
      link: "",
    },
  });

  return (
    <Box p={10}>
      <Group grow direction="column">
        <NumberInput {...form.getInputProps("index")} />
        <TextInput {...form.getInputProps("title")} />
        <TextInput {...form.getInputProps("description")} />
        <DatePicker {...form.getInputProps("date")} />
        <TimeInput {...form.getInputProps("time")} />
        <TimeInput {...form.getInputProps("duration")} />
        <TextInput {...form.getInputProps("link")} />
      </Group>
    </Box>
  );
};

export default NewMeeting;
