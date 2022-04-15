import {
  Alert,
  Button,
  Center,
  Checkbox,
  Container,
  Group,
  Paper,
  Space,
  Text,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import { Link, Navigate } from "react-router-dom";
import {
  BackButton,
  ColorSchemeButton,
  Footer,
  ForgotPasswordInput,
  Header,
  Logo,
} from "../../components";
import z from "zod";
import { zodResolver, useForm } from "@mantine/form";
import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";
import { UserContext } from "../../context/user";

export function Login() {
  const theme = useMantineTheme();
  const { t } = useTranslation();
  const { user, setUser } = useContext(UserContext);
  const [alert, setAlert] = useState(false);

  const schema = z.object({
    email: z
      .string()
      .email({ message: "email is not valid" })
      .min(12, { message: "email is too short" }),
    password: z.string().min(6, { message: "password is too short" }),
    rememberMe: z.boolean(),
  });

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  return user ? (
    <Navigate to="/" />
  ) : (
    <>
      <Header
        leftSide={<BackButton />}
        rightSide={<ColorSchemeButton />}
        withBorder
      >
        <Text align="center" size="xl" weight="bolder">
          Login
        </Text>
      </Header>

      <Container size="xs" my={80}>
        <Paper p={20} shadow="xs" withBorder={theme.colorScheme === "dark"}>
          <Center>
            <Logo width={350} />
          </Center>
          <Space h={10} />

          <form
            onSubmit={form.onSubmit((values) => {
              fetch("/api/login", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(values),
              }).then((res) => {
                if (res.status == 200) {
                  res.json().then((data) => {
                    console.log("Logged in successfully");

                    setUser(data);
                    setAlert(false);
                  });
                } else {
                  setAlert(true);
                }
              });
            })}
            noValidate
          >
            <Group direction="column" grow>
              <TextInput
                label={t("email")}
                placeholder={t("email")}
                required
                {...form.getInputProps("email")}
              />
              <ForgotPasswordInput
                label={t("password")}
                placeholder={t("password")}
                linkLabel={t("forgotPassword")}
                component={Link}
                componentProps={{ to: "/reset" }}
                required
                {...form.getInputProps("password")}
              />
            </Group>
            <Checkbox
              mt={15}
              label={"Remember me"}
              {...form.getInputProps("rememberMe")}
            />
            <Space h={30} />
            {alert && (
              <Alert
                color="red"
                mb={20}
                onClose={() => setAlert(false)}
                withCloseButton
                title="Invalid credentials"
                variant="outline"
              >
                Email or Password incorrect
              </Alert>
            )}
            <Group position="apart" grow>
              <div>
                <Link style={{ padding: 5 }} to="/register">
                  {t("register")}
                </Link>
              </div>
              <Button type="submit">{t("login")}</Button>
            </Group>
          </form>
        </Paper>
      </Container>
      <Footer withBorder />
    </>
  );
}

export default Login;
