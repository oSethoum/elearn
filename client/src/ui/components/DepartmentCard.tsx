import { Image, Paper, Title } from "@mantine/core";

interface Props {
  image: string;
  title: string;
  description: string;
}

export const DepartmentCard = ({ image, title, description }: Props) => {
  return (
    <Paper>
      <Image src={image} height={160} />
      <Title>{title}</Title>
      <p>{description}</p>
    </Paper>
  );
};
