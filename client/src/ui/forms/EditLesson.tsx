import {
  Button,
  Container,
  Group,
  Paper,
  Space,
  Switch,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import z from "zod";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../components";
import { useEffect, useState } from "react";
import { useLessonQuery, useUpdateLessonMutation } from "../../graphql/";
import { useNotifications } from "@mantine/notifications";
import RichTextEditorInput from "../components/RichTextEditor";

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
  const [contentLoaded, setContentLoaded] = useState(false);

  const { loading, data } = useLessonQuery({
    variables: {
      where: {
        id: parseInt(params.lessonId as string),
      },
    },
  });

  useEffect(() => {
    if (data) {
      form.setValues({
        title: data?.lesson?.title as string,
        description: data?.lesson?.description as string,
        published: data?.lesson?.published as boolean,
        content: data?.lesson?.content as string,
      });

      setContentLoaded(true);
    }
  }, [loading]);

  const navigate = useNavigate();

  const { t } = useTranslation();
  const { showNotification } = useNotifications();

  if (loading) return <Loader height="80vh" />;

  return (
    <Container my={20} size="xl">
      <Paper withBorder p={20}>
        <Text weight="bold" sx={{ fontSize: 22 }}>
          {t("editLesson")}
        </Text>
        <Space h={15} />
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
              required
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

            {contentLoaded && (
              <RichTextEditorInput
                required
                label={t("content")}
                {...form.getInputProps("content")}
              />
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
                {t("cancel")}
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
