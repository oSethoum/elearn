import {
  Button,
  Container,
  Group,
  Paper,
  Space,
  Text,
  Switch,
  TextInput,
} from "@mantine/core";
import { useAssignmentQuery, useUpdateAssignmentMutation } from "@/graphql";
import { useForm, zodResolver } from "@mantine/form";
import { useNotifications } from "@mantine/notifications";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import z from "zod";
import RichTextEditorInput from "../components/RichTextEditor";

export const NewAssignment = () => {
  const params = useParams();

  const { data, loading } = useAssignmentQuery({
    variables: {
      where: { id: parseInt(params?.assignmentId as string) },
    },
  });

  const [update] = useUpdateAssignmentMutation();

  const { showNotification } = useNotifications();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [contentLoaded, setContentLoaded] = useState(false);
  const schema = z.object({
    title: z.string().nonempty(t("notEmpty")),
    description: z.string().nonempty(t("notEmpty")),
    published: z.boolean(),
    content: z.string().nonempty(t("notEmpty")),
  });

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      title: "",
      published: false,
      description: "",
      content: "",
    },
  });

  useEffect(() => {
    if (data) {
      form.setValues({
        title: data?.assignment?.title as string,
        published: data?.assignment?.published as boolean,
        description: data?.assignment?.description as string,
        content: data?.assignment?.content as string,
      });
      setContentLoaded(true);
    }
  }, [loading]);

  return (
    <Container size="xl" my={20} sx={{ minHeight: "60vh" }}>
      <Paper p={20} withBorder>
        <Text weight="bold" sx={{ fontSize: 22 }}>
          {t("editAssignment")}
        </Text>
        <Space h={15} />
        <form
          onSubmit={form.onSubmit((values) => {
            console.log(values);
            update({
              variables: {
                where: {
                  id: parseInt(params?.assignmentId as string),
                },
                data: {
                  content: {
                    set: values.content,
                  },
                  title: {
                    set: values.title,
                  },
                  published: {
                    set: values.published,
                  },
                  description: {
                    set: values.description,
                  },
                },
              },
              onCompleted() {
                showNotification({
                  message: t("success"),
                  color: "green",
                });
                navigate("/courses/" + params?.courseId + "?tab=assignments");
              },
            });
          })}
        >
          <Group grow direction="column">
            <TextInput
              label={t("title")}
              placeholder={t("title")}
              required
              {...form.getInputProps("title")}
            />
            <TextInput
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
          </Group>
          <Space h={20} />
          <Group position="right">
            <Button
              variant="default"
              onClick={() => {
                navigate(`/courses/${params?.courseId}?tab=assignments`);
              }}
            >
              {t("cancel")}
            </Button>
            <Button color="green" type="submit">
              {t("apply")}
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
};

export default NewAssignment;
