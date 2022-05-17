import { Box, Space } from "@mantine/core";
import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "@/context";

export const Course = () => {
  const { user } = useAppContext();

  if (!user) return <Navigate to="/404" />;

  return (
    <Box>
      <Space h={20} />
      <Outlet />
      <Space h={20} />
    </Box>
  );
};

export default Course;
