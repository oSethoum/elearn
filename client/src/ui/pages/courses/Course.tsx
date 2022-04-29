import { Box } from "@mantine/core";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../../context/user";

export const Course = () => {
  const { user } = useContext(UserContext);

  if (!user) return <Navigate to="/404" />;

  return (
    <Box>
      <Outlet />
    </Box>
  );
};

export default Course;
