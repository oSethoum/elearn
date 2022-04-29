import {
  Button,
  Container,
  Group,
  NumberInput,
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
import { gql, useQuery } from "@apollo/client";
import { Loader } from "../components";
import { useEffect } from "react";
import {} from "../../graphql/";

export const EditLesson = () => {
  const schema = z.object({
    index: z.number().positive(),
    title: z.string().nonempty(),
    description: z.string().nonempty(),
    content: z.string().min(20),
  });

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      index: 0,
      title: "",
      description: "",
      published: "",
      content: "",
    },
  });
  const params = useParams();

  const { loading, data } = useQuery(
    gql`
      query ($where: LessonWhereUniqueInput!) {
        lesson(where: $where) {
          id
          index
          title
          description
          published
          content
        }
      }
    `,
    {
      variables: {
        where: {
          id: parseInt(params.lessonId as string),
        },
      },
    }
  );

  useEffect(() => {
    form.setValues({
      content: data?.lesson.content,
      description: data?.lesson.description,
      index: data?.lesson.index,
      published: data?.lesson.published,
      title: data?.lesson.title,
    });
  }, [loading]);

  const navigate = useNavigate();

  const { t } = useTranslation();

  if (loading) return <Loader height="80vh" />;

  return (
    <Container my={20} size="xl">
      <Paper withBorder p={20}>
        <form
          onSubmit={form.onSubmit((values) => {
            console.log(values);
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
                Apply
              </Button>
            </Group>
          </Group>
        </form>
      </Paper>
    </Container>
  );
};

export default EditLesson;
