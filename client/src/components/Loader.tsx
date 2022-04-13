import { Center, Loader as MantineLoader } from "@mantine/core";

export function Loader() {
  return (
    <Center sx={{ height: "100vh" }}>
      <MantineLoader variant="bars" size="xl" />
    </Center>
  );
}
