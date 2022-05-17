import { Box, Text } from "@mantine/core";
import React from "react";

export const StatCard = ({
  text,
  icon,
}: {
  text: string;
  icon?: React.ReactNode;
}) => {
  return (
    <Box>
      <Text>{text}</Text>
      {icon}
    </Box>
  );
};

export default StatCard;
