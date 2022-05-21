import { ReactNode } from "react";
import { Image, Paper, Title } from "@mantine/core";

interface Props {
  image: string;
  title: string;
  description: ReactNode;
}

export const DepartmentCard = ({ image, title, description }: Props) => {
  return (
    <Paper withBorder shadow="xs">
      <Image src={image} height={160} />
      <Title>{title}</Title>
      {description}
    </Paper>
  );
};
