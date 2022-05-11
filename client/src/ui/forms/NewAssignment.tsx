import { useCreateAssignmentMutation } from "@/graphql";
import {
  Button,
  Container,
  Group,
  Paper,
  Space,
  Switch,
  TextInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useNotifications } from "@mantine/notifications";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import z from "zod";
import RichTextEditorInput from "../components/RichTextEditor";

export const NewAssignment = () => {
  const [create, { loading: isCreating }] = useCreateAssignmentMutation();
  const params = useParams();
  const { showNotification } = useNotifications();
  const navigate = useNavigate();
  const { t } = useTranslation();
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

  return (
    <Container size="xl" my={20} sx={{ minHeight: "60vh" }}>
      <Paper p={20} withBorder>
        <form
          onSubmit={form.onSubmit((values) => {
            console.log(values);
            create({
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
            <RichTextEditorInput
              label={t("content")}
              {...form.getInputProps("content")}
            />
          </Group>
          <Space h={20} />
          <Group position="right">
            <Button variant="default" onClick={() => navigate(-1)}>
              {t("cancel")}
            </Button>
            <Button type="submit">{t("add")}</Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
};

export default NewAssignment;
