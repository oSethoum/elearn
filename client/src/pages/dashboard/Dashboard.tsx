import { FC } from "react";
import { Box, BoxProps } from "@mantine/core";

export interface IDashboardProps extends BoxProps<"div"> {}
export const Dashboard: FC<IDashboardProps> = () => {
  return <Box></Box>;
};

export default Dashboard;
