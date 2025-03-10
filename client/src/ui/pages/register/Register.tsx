import {
  Alert,
  Button,
  Center,
  Container,
  Group,
  Paper,
  Select,
  PasswordInput,
  SimpleGrid,
  Space,
  Text,
  TextInput,
  useMantineTheme,
  Title,
} from "@mantine/core";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { showNotification } from "@mantine/notifications";
import {
  BackButton,
  ColorSchemeButton,
  Footer,
  Header,
  Logo,
} from "../../components";
import {} from "react-icons/fa";
import z from "zod";
import { useTranslation } from "react-i18next";
import { useForm, zodResolver } from "@mantine/form";
import { useEffect, useState } from "react";
import { useAppContext } from "@/context/";

export const Register = () => {
  const theme = useMantineTheme();
  const { t } = useTranslation();
  const { user } = useAppContext();
  const [topics, setTopics] = useState<
    { value: string; label: string; years: number }[]
  >([]);

  const navigate = useNavigate();

  function register(values) {
    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => {
        if (res.status === 201) {
          showNotification({
            title: t("success"),
            message: t("registerSuccess"),
            color: "green",
          });
          navigate("/");
        }

        if (res.status === 400) {
          showNotification({
            title: t("failed"),
            message: t("registerFailed"),
            color: "red",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const schema = z.object({
    firstName: z.string().min(4, t("minimumLength") + " 4"),
    lastName: z.string().min(4, t("minimumLength") + " 4"),
    username: z.string().min(6, t("minimumLength") + " 6"),
    email: z.string().min(8, t("minimumLength") + " 8"),
    password: z.string().min(6, t("minimumLength") + " 6"),
  });

  const [years, setYears] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/topics")
      .then((res) => res.json())
      .then((data) => {
        setTopics(
          data.map((topic) => ({
            label: topic.name,
            value: topic.id.toString(),
            years: topic.years,
            group: topic.department.name,
          }))
        );
      })
      .catch((err) => console.log(err));
  }, []);

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      firstName: "",
      lastName: "",
      topic: "",
      year: "",
      username: "",
      role: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    const currentTopic = topics.find((t) => t.value === form.values.topic);
    const computerYears: string[] = [];

    if (currentTopic) {
      for (let i = 1; i <= currentTopic.years; i++) {
        computerYears.push(i.toString());
      }
    }
    setYears(computerYears);
    form.values.year = "1";
  }, [form.values.topic]);

  const [alert, setAlert] = useState(false);

  return user ? (
    <Navigate to="/404" />
  ) : (
    <>
      <Header
        leftSide={<BackButton />}
        rightSide={<ColorSchemeButton />}
        withBorder
      >
        <Text align="center" size="xl" weight="bolder">
          {t("register")}
        </Text>
      </Header>
      <Container size="xs" my={30}>
        <Paper p={20} shadow="sm" withBorder={theme.colorScheme === "dark"}>
          <Center>
            <Logo width={350} />
          </Center>
          <Space h={10} />
          <form
            onSubmit={form.onSubmit((values) => {
              register(values);
            })}
            noValidate
          >
            <SimpleGrid>
              <Group direction="column" grow>
                <Title order={3}>{t("personalInformation")}</Title>
                <TextInput
                  label={t("firstName")}
                  placeholder={t("firstName")}
                  required
                  {...form.getInputProps("firstName")}
                />
                <TextInput
                  label={t("lastName")}
                  placeholder={t("lastName")}
                  required
                  {...form.getInputProps("lastName")}
                />
                <Select
                  label={t("role")}
                  placeholder={t("role")}
                  required
                  data={[
                    {
                      label: t("teacher"),
                      value: "teacher",
                    },
                    {
                      label: t("student"),
                      value: "student",
                    },
                  ]}
                  {...form.getInputProps("role")}
                />
                {topics.length > 0 && form.values.role === "student" && (
                  <Select
                    label={t("topic")}
                    placeholder={t("topic")}
                    required
                    data={topics}
                    {...form.getInputProps("topic")}
                  />
                )}
                {years.length > 0 && form.values.role === "student" && (
                  <Select
                    label={t("year")}
                    placeholder={t("year")}
                    required
                    data={years}
                    {...form.getInputProps("year")}
                  />
                )}
              </Group>
              <Space h={10} />
              <Group direction="column" grow>
                <Title order={3}>{t("loginInformation")}</Title>
                <TextInput
                  label={t("username")}
                  placeholder={t("username")}
                  required
                  {...form.getInputProps("username")}
                />
                <TextInput
                  label={t("email")}
                  placeholder={t("email")}
                  required
                  {...form.getInputProps("email")}
                />
                <PasswordInput
                  label={t("password")}
                  placeholder={t("password")}
                  required
                  {...form.getInputProps("password")}
                />
              </Group>
            </SimpleGrid>
            <Space h={30} />
            {alert && (
              <Alert
                onClose={() => setAlert(false)}
                title={t("error")}
                withCloseButton
                variant="outline"
                color="red"
              >
                {t("formError")}
              </Alert>
            )}
            <Space h={30} />
            <Group position="apart" grow>
              <div>
                <Link style={{ padding: 5 }} to="/login">
                  {t("login")}
                </Link>
              </div>
              <Button type="submit" style={{ width: 150 }}>
                {t("register")}
              </Button>
            </Group>
          </form>
        </Paper>
      </Container>
      <Footer withBorder />
    </>
  );
};

export default Register;
