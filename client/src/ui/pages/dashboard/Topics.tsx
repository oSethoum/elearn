import { ActionIcon, Box, Group } from "@mantine/core";
import { useTopicsQuery } from "@/graphql";
import { DataGrid, Loader } from "@/ui/components";
import { MdDelete, MdEdit } from "react-icons/md";
import { useTranslation } from "react-i18next";

export const Topics = () => {
  const { data } = useTopicsQuery();
  const { t } = useTranslation();
  if (!data) return <Loader height={"80vh"} />;

  return (
    <Box sx={{ height: "100%" }} m={10}>
      <DataGrid
        headerModifier={t}
        data={data?.topics.map((topic) => ({
          id: topic.id,
          name: topic.name,
          years: topic.years,
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

export default Topics;
