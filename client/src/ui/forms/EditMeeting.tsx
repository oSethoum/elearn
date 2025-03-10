import {
  Button,
  Container,
  Group,
  Paper,
  Space,
  Textarea,
  Text,
  TextInput,
} from "@mantine/core";
import { DatePicker, TimeInput } from "@mantine/dates";
import { useForm, zodResolver } from "@mantine/form";
import { useTranslation } from "react-i18next";
import z from "zod";
import "dayjs/locale/fr";
import "dayjs/locale/ar-dz";
import { useEffect } from "react";
import { useAppContext } from "@/context";
import { useMeetingQuery, useUpdateMeetingMutation } from "@/graphql";
import { useNotifications } from "@mantine/notifications";
import { useNavigate, useParams } from "react-router-dom";

export const EditMeeting = () => {
  const [update] = useUpdateMeetingMutation();
  const { t } = useTranslation();
  const params = useParams();

  const { data, loading } = useMeetingQuery({
    variables: {
      where: { id: parseInt(params?.meetingId as string) },
    },
  });
  const navigate = useNavigate();
  const { showNotification } = useNotifications();

  const schema = z.object({
    title: z.string().nonempty(t("notEmpty")),
    description: z.string(),
    date: z.date(),
    startTime: z.date(),
    duration: z.date(),
    link: z.string().url(t("invalid")),
  });

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      title: "",
      description: "",
      date: new Date(),
      startTime: new Date(),
      duration: new Date(),
      link: "",
    },
  });

  useEffect(() => {
    if (data) {
      form.setValues({
        title: data?.meeting?.title as string,
        description: data?.meeting?.description as string,
        date: new Date(data?.meeting?.date as string),
        startTime: new Date(data?.meeting?.startTime as string),
        duration: new Date(data?.meeting?.duration as string),
        link: data?.meeting?.link as string,
      });
    }
  }, [loading]);

  const { language } = useAppContext();

  return (
    <Container size="xl">
      <Paper withBorder p={20} my={20}>
        <Text weight="bold" sx={{ fontSize: 22 }}>
          {t("editMeeting")}
        </Text>
        <Space h={15} />
        <form
          onSubmit={form.onSubmit((values) => {
            console.log(values);
            update({
              variables: {
                where: {
                  id: parseInt(params?.meetingId as string),
                },
                data: {
                  title: {
                    set: values.title,
                  },
                  description: {
                    set: values.description,
                  },
                  date: {
                    set: values.date,
                  },
                  startTime: {
                    set: values.startTime,
                  },
                  duration: {
                    set: values.duration,
                  },
                  link: {
                    set: values.link,
                  },
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

                navigate(`/courses/${params.courseId}?tab=meetings`);
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
              required
            />
            <Textarea
              label={t("description")}
              placeholder={t("description")}
              {...form.getInputProps("description")}
              required
            />
            <DatePicker
              locale={language === "ar" ? "ar-dz" : language}
              label={t("date")}
              placeholder={t("date")}
              {...form.getInputProps("date")}
              required
            />
            <TimeInput
              label={t("startTime")}
              placeholder={t("startTime")}
              {...form.getInputProps("startTime")}
              required
            />
            <TimeInput
              label={t("duration")}
              placeholder={t("duration")}
              {...form.getInputProps("duration")}
              required
            />
            <TextInput
              label={t("link")}
              placeholder={t("link")}
              {...form.getInputProps("link")}
              required
            />
          </Group>
          <Space h={20} />
          <Group position="right">
            <Button
              variant="default"
              onClick={() => {
                navigate(-1);
              }}
            >
              {t("cancel")}
            </Button>
            <Button type="submit" color="green">
              {t("apply")}
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
};

export default EditMeeting;
