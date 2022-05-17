import { ActionIcon, useMantineTheme } from "@mantine/core";
import { BsArrow90DegLeft, BsArrow90DegRight } from "react-icons/bs";
import { Link, To, useNavigate } from "react-router-dom";

export function BackButton({ to }: { to?: string }) {
  const theme = useMantineTheme();
  const navigate = useNavigate();

  return (
    <ActionIcon
      onClick={() => {
        to ? navigate(to) : navigate(-1);
      }}
      radius="xl"
      size="xl"
    >
      {theme.dir === "ltr" ? (
        <BsArrow90DegLeft size={28} />
      ) : (
        <BsArrow90DegRight size={28} />
      )}
    </ActionIcon>
  );
}
