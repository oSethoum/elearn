import { ActionIcon, useMantineTheme } from "@mantine/core";
import { BsArrow90DegLeft, BsArrow90DegRight } from "react-icons/bs";
import { Link, To } from "react-router-dom";

export function BackButton({ to }: { to?: To }) {
  const theme = useMantineTheme();

  return (
    <ActionIcon component={Link} to={to || "/"} radius="xl" size="xl">
      {theme.dir === "ltr" ? (
        <BsArrow90DegLeft size={28} />
      ) : (
        <BsArrow90DegRight size={28} />
      )}
    </ActionIcon>
  );
}
