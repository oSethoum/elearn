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
import { Link, Navigate } from "react-router-dom";
import {
  BackButton,
  ColorSchemeButton,
  Footer,
  Header,
  Logo,
} from "../../components";
import z from "zod";
import { useTranslation } from "react-i18next";
import { useForm, zodResolver } from "@mantine/form";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user";

function signup(values) {
  const { grade, ...user } = values;

  const body = {
    grade,
    user: {
      create: {
        ...user,
      },
    },
  };

  return fetch("/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => {
      if (res.status === 201) {
        return true;
      }
    })
    .catch((err) => {
      return err;
    });
}

export const Register = () => {
  const theme = useMantineTheme();
  const { t } = useTranslation();
  const { user } = useContext(UserContext);
  const [topics, setTopics] = useState<
    { value: string; label: string; grades: number }[]
  >([]);
  const [isFetching, setIsFetching] = useState(true);
  const schema = z.object({
    firstName: z.string().min(4, "minimum 4"),
    lastName: z.string().min(4, "minimum 4"),
    topic: z.string().nonempty("not empty"),
    username: z.string().min(6, "minimum 6"),
    email: z.string().email("invalid email").min(8, "minimum 8"),
    password: z.string().min(6, "minimum 6"),
  });

  const [grades, setGrades] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/topics")
      .then((res) => res.json())
      .then((data) => {
        setTopics(
          data.map((topic) => ({
            label: topic.name,
            value: topic.id.toString(),
            grades: topic.grades,
          }))
        );
        setIsFetching(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      firstName: "",
      lastName: "",
      topic: "",
      grade: "",
      username: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    const cuurentTopic = topics.find((t) => t.value === form.values.topic);
    const computerGrades: string[] = [];

    if (cuurentTopic) {
      for (let i = 1; i <= cuurentTopic.grades; i++) {
        computerGrades.push(i.toString());
      }
    }
    setGrades(computerGrades);
    form.values.grade = "1";
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
              signup(values);
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
                {topics.length > 0 && (
                  <Select
                    label={t("topic")}
                    placeholder={t("topic")}
                    required
                    data={topics}
                    {...form.getInputProps("topic")}
                  />
                )}
                {grades.length > 0 && (
                  <Select
                    label={t("grade")}
                    placeholder={t("grade")}
                    required
                    data={grades}
                    {...form.getInputProps("grade")}
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
                title={t("Errors")}
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
              <Button
                type="submit"
                onClick={() => {
                  const { hasErrors } = form.validate();
                  setAlert(hasErrors);
                }}
                style={{ width: 150 }}
              >
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
