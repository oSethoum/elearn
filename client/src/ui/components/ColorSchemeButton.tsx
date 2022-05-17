import {
  ActionIcon,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { CgMoon, CgSun } from "react-icons/cg";

export function ColorSchemeButton() {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <ActionIcon
      radius="xl"
      size="xl"
      color={theme.primaryColor}
      onClick={() => toggleColorScheme()}
    >
      {colorScheme === "dark" ? (
        <CgSun size="28" color={theme.colors.yellow[4]} />
      ) : (
        <CgMoon size="28" color={theme.colors.blue[9]} />
      )}
    </ActionIcon>
  );
}
