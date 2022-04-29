import { Center, Loader as MantineLoader } from "@mantine/core";

export function Loader({ height = "20vh" }: { height: number | string }) {
  return (
    <Center sx={{ height }}>
      <MantineLoader variant="bars" size="xl" />
    </Center>
  );
}
