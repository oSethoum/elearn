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
import { useContext, useState } from "react";
import { UserContext } from "../../context/user";

export const Register = () => {
  const theme = useMantineTheme();
  const { t } = useTranslation();
  const { user } = useContext(UserContext);
  const schema = z.object({
    firstName: z.string().min(4, "minimum 4"),
    lastName: z.string().min(4, "minimum 4"),
    major: z.string().nonempty("not empty"),
    username: z.string().min(6, "minimum 6"),
    email: z.string().email("invalid email").min(8, "minimum 8"),
    password: z.string().min(6, "minimum 6"),
  });

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      firstName: "",
      lastName: "",
      major: "",
      username: "",
      email: "",
      password: "",
    },
  });
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
              console.log(values);
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
                  searchable
                  label={t("major")}
                  placeholder={t("major")}
                  required
                  data={["Hello", "nothing"]}
                  {...form.getInputProps("major")}
                />
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
