import {
  Button,
  Container,
  Group,
  Paper,
  Space,
  TextInput,
} from "@mantine/core";
import { DatePicker, TimeInput } from "@mantine/dates";
import { useForm, zodResolver } from "@mantine/form";
import { useTranslation } from "react-i18next";
import z from "zod";
import "dayjs/locale/fr";
import "dayjs/locale/ar-dz";
import { useContext } from "react";
import { useAppContext } from "@/context";
import { useCreateMeetingMutation } from "@/graphql";
import { useNotifications } from "@mantine/notifications";
import { useNavigate, useParams } from "react-router-dom";

export const NewMeeting = () => {
  const [create] = useCreateMeetingMutation();
  const navigate = useNavigate();
  const { showNotification } = useNotifications();
  const { t } = useTranslation();

  const schema = z.object({
    title: z.string().nonempty(t("notEmpty")),
    description: z.string(),
    date: z.date(),
    startTime: z.date(),
    duration: z.date(),
    link: z.string().url(t("invalid")),
  });

  const params = useParams();

  const { language } = useAppContext();

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      title: "",
      description: "",
      date: "",
      startTime: "",
      duration: "",
      link: "",
    },
  });

  return (
    <Container size="xl">
      <Paper withBorder p={20} my={20}>
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
                });

                navigate(-1);
              },
            });
          })}
          noValidate
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
            <DatePicker
              locale={language === "ar" ? "ar-dz" : language}
              label={t("date")}
              placeholder={t("date")}
              {...form.getInputProps("date")}
            />
            <TimeInput
              label={t("startTime")}
              placeholder={t("startTime")}
              {...form.getInputProps("startTime")}
            />
            <TimeInput
              label={t("duration")}
              placeholder={t("duration")}
              {...form.getInputProps("duration")}
            />
            <TextInput
              label={t("link")}
              placeholder={t("link")}
              {...form.getInputProps("link")}
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

export default NewMeeting;
