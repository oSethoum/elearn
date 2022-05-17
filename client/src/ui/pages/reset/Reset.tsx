import {
  Button,
  Center,
  Container,
  Paper,
  Space,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  BackButton,
  ColorSchemeButton,
  Footer,
  Header,
  Logo,
} from "../../components";

import z from "zod";
import { zodResolver } from "@mantine/form";
import { useContext } from "react";
import { useAppContext } from "@/context/";
import { Navigate } from "react-router-dom";

export function Reset() {
  const schema = z.object({
    email: z.string().email("Invalid Email"),
  });
  const form = useForm({
    schema: zodResolver(schema),
    initialValues: { email: "" },
  });

  const { user } = useAppContext();

  return user ? (
    <Navigate to="/404" />
  ) : (
    <>
      <Header
        withBorder
        leftSide={<BackButton to="/login" />}
        rightSide={<ColorSchemeButton />}
      >
        <Text align="center" size="xl" weight="bold">
          Reset Password
        </Text>
      </Header>
      <Container size="xs" my={30}>
        <Paper withBorder shadow="sm" p={20}>
          <form onSubmit={form.onSubmit((values) => {})} noValidate>
            <Center>
              <Logo width={350} />
            </Center>
            <Space h={20} />
            <TextInput
              required
              label="Email"
              placeholder="Your email"
              {...form.getInputProps("email")}
            />
            <Space h={20} />
            <Button fullWidth type="submit">
              Submit
            </Button>
          </form>
        </Paper>
      </Container>
      <Footer withBorder />
    </>
  );
}

export default Reset;
