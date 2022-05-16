import { ActionIcon, Box, Button, Group, Menu, Paper } from "@mantine/core";
import { useDepartmentsQuery } from "@/graphql";
import { DataGrid } from "@/ui/components";
import { MdDelete, MdEdit } from "react-icons/md";
import { useTranslation } from "react-i18next";

export const Departments = () => {
  const { data } = useDepartmentsQuery();
  const { t } = useTranslation();
  if (!data) return <Box>Loading...</Box>;

  return (
    <Box sx={{ height: "100%" }} m={10}>
      <DataGrid
        headerModifier={t}
        data={data?.departments.map((department, index) => ({
          id: department.id,
          name: department.name,
          topics: department._count?.topics,
        }))}
        actionsLabel="actions"
        actions={(index) => (
          <Group>
            <ActionIcon color="green">
              <MdEdit />
            </ActionIcon>
            <ActionIcon color="red">
              <MdDelete />
            </ActionIcon>
          </Group>
        )}
      />
    </Box>
  );
};

export default Departments;
