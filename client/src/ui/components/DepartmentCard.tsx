import { Department } from "@/graphql";
import { Box, Card, List, Paper } from "@mantine/core";

interface Props {
  department: Department;
}

export const DepartmentCard = ({ department }: Props) => {
  return (
    <Paper sx={{ textAlign: "center" }} withBorder>
      <h1>{department.name}</h1>
    </Paper>
  );
};
