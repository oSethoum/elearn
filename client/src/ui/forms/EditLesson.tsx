import {
  Button,
  Container,
  Group,
  Paper,
  Switch,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { RichTextEditor } from "@mantine/rte";
import { useForm, zodResolver } from "@mantine/form";
import z from "zod";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../components";
import { useEffect } from "react";
import { useLessonQuery, useUpdateLessonMutation } from "../../graphql/";
import { useNotifications } from "@mantine/notifications";

export const EditLesson = () => {
  const schema = z.object({
    title: z.string().nonempty(),
    description: z.string().nonempty(),
    content: z.string().min(20),
  });
  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      title: "",
      description: "",
      published: false,
      content: "",
    },
  });
  const params = useParams();
  const [updateLesson] = useUpdateLessonMutation();

  const { loading, data } = useLessonQuery({
    variables: {
      where: {
        id: parseInt(params.lessonId as string),
      },
    },
  });

  useEffect(() => {
    form.setValues({
      content: data?.lesson?.content as string,
      description: data?.lesson?.description as string,
      published: data?.lesson?.published as boolean,
      title: data?.lesson?.title as string,
    });
  }, [loading]);

  const navigate = useNavigate();

  const { t } = useTranslation();
  const { showNotification } = useNotifications();

  if (loading) return <Loader height="80vh" />;

  return (
    <Container my={20} size="xl">
      <Paper withBorder p={20}>
        <form
          onSubmit={form.onSubmit((values) => {
            updateLesson({
              variables: {
                where: {
                  id: parseInt(params.lessonId as string),
                },
                data: {
                  title: {
                    set: values.title,
                  },
                  content: {
                    set: values.content,
                  },
                  description: {
                    set: values.description,
                  },
                  published: {
                    set: values.published,
                  },
                },
              },
              onCompleted() {
                showNotification({
                  message: t("success"),
                  color: "green",
                });
                navigate("/courses/" + params.courseId + "?tab=lessons");
              },
            });
          })}
          noValidate
        >
          <Group grow spacing="lg" direction="column">
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
              {...form.getInputProps("published", { type: "checkbox" })}
            />
            <Text sx={{ fontSize: 14 }} mb={-15} weight={500}>
              {t("Content")}
            </Text>
            <RichTextEditor
              sx={(theme) => ({
                minHeight: 250,
                border: form.getInputProps("content").error
                  ? `1px solid ${theme.colors.red[6]}`
                  : undefined,
                color: form.getInputProps("content").error
                  ? theme.colors.red[6]
                  : undefined,
              })}
              {...form.getInputProps("content")}
            />
            {form.getInputProps("content").error && (
              <Text
                mt={-15}
                sx={(theme) => ({ fontSize: 14, color: theme.colors.red[6] })}
              >
                {form.getInputProps("content").error}
              </Text>
            )}
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
              <Button type="submit" color="green" sx={{ width: 100 }}>
                {t("apply")}
              </Button>
            </Group>
          </Group>
        </form>
      </Paper>
    </Container>
  );
};

export default EditLesson;
