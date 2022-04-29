import { Button, Center, Group, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../components";

export function NotFound() {
  const navigate = useNavigate();
  return (
    <Center sx={{ height: "100vh" }}>
      <Group direction="column" grow position="center">
        <Logo width={400} />
        <h1 style={{ margin: 0, fontSize: 48, textAlign: "center" }}>404</h1>
        <Button onClick={() => navigate("/")}>Back Home</Button>
      </Group>
    </Center>
  );
}

export default NotFound;
