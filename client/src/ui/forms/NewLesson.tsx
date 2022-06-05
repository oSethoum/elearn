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
import RichTextEditorInput from "../components/RichTextEditor";
import { namedOperations, useCreateLessonMutation } from "../../graphql";
import { showNotification } from "@mantine/notifications";

export const NewLesson = () => {
  const { t } = useTranslation();
  const schema = z.object({
    title: z.string().nonempty(t("notEmpty")),
    description: z.string(),
    content: z.string().min(20),
  });

  const navigate = useNavigate();

  const [createLesson, { data, error }] = useCreateLessonMutation({});

  const { onSubmit, getInputProps } = useForm({
    schema: zodResolver(schema),
    initialValues: {
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
    showNotification({
      color: "green",
      message: t("success"),
    });

    navigate(`/courses/${params.courseId}?tab=lessons`);
  }

  return (
    <Container my={20} size="xl">
      <Paper withBorder p={20}>
        <Text weight="bold" sx={{ fontSize: 22 }}>
          {t("addLesson")}
        </Text>
        <Space h={15} />
        <form
          noValidate
          onSubmit={onSubmit((values) => {
            createLesson({
              variables: {
                data: {
                  ...values,
                  course: {
                    connect: {
                      id: parseInt(params?.courseId as string),
                    },
                  },
                },
              },
              refetchQueries: [namedOperations.Query.Course],
            });
          })}
        >
          <Group grow spacing="lg" direction="column">
            <TextInput
              label={t("title")}
              placeholder={t("title")}
              {...getInputProps("title")}
              required
            />
            <Textarea
              label={t("description")}
              placeholder={t("description")}
              {...getInputProps("description")}
            />
            <Switch label={t("published")} {...getInputProps("published")} />
            <RichTextEditorInput
              required
              label={t("content")}
              {...getInputProps("content")}
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
                {t("cancel")}
              </Button>
              <Button type="submit" sx={{ width: 100 }}>
                {t("add")}
              </Button>
            </Group>
          </Group>
        </form>
      </Paper>
    </Container>
  );
};

export default NewLesson;
