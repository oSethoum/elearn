import {
  Button,
  Container,
  Group,
  LoadingOverlay,
  NumberInput,
  Paper,
  Switch,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import z from "zod";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import RichTextEditorInput from "../components/RichTextEditor";
import { useCreateLessonMutation } from "../../graphql";
import { showNotification } from "@mantine/notifications";

export const NewLesson = () => {
  const schema = z.object({
    index: z.number().positive(),
    title: z.string().nonempty(),
    description: z.string().nonempty(),
    content: z.string().min(20),
  });

  const navigate = useNavigate();

  const [createLesson, { loading, data, error }] = useCreateLessonMutation();

  const { t } = useTranslation();

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      index: 0,
      title: "",
      description: "",
      published: false,
      content: "",
    },
  });

  const params = useParams();

  if (error) {
    console.log(error);
  }

  if (data) {
    // success
    showNotification({
      title: t("success"),
      color: "green",
      message: t("lessonCreated"),
    });
  }

  return (
    <Container my={20} size="xl">
      <Paper sx={{ position: "relative" }} withBorder p={20}>
        <LoadingOverlay visible={loading} />
        <form
          onSubmit={form.onSubmit((values) => {
            createLesson({
              variables: {
                data: {
                  ...values,
                  course: {
                    connect: {
                      id: parseInt(params.courseId as string),
                    },
                  },
                },
              },
            });
          })}
          noValidate
        >
          <Group grow spacing="lg" direction="column">
            <NumberInput {...form.getInputProps("index")} label={t("Index")} />
            <TextInput
              label={t("title")}
              placeholder={t("title")}
              {...form.getInputProps("title")}
            />
            <Textarea
              label={t("description")}
              placeholder={t("description")}
              {...form.getInputProps("description")}
            />
            <Switch
              label={t("published")}
              {...form.getInputProps("published")}
            />
            <RichTextEditorInput
              label={t("content")}
              {...form.getInputProps("content")}
            />
            <Group position="right">
              <Button
                variant="outline"
                onClick={() => {
                  navigate(-1);
                }}
                sx={{ width: 100 }}
                color="gray"
              >
                Cancel
              </Button>
              <Button type="submit" sx={{ width: 100 }}>
                Add
              </Button>
            </Group>
          </Group>
        </form>
      </Paper>
    </Container>
  );
};

export default NewLesson;
