import { FC, useContext } from "react";
import { Box, BoxProps } from "@mantine/core";
import { UserContext } from "../../../context/user";
import { Navigate } from "react-router-dom";

export interface IDashboardProps extends BoxProps<"div"> {}

export const Dashboard: FC<IDashboardProps> = () => {
  const { user } = useContext(UserContext);

  return user?.role !== "admin" ? <Navigate to="/404" /> : <Box></Box>;
};

export default Dashboard;
