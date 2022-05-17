import { Box, Card, List, Paper, Title } from "@mantine/core";
import React, {
  FC,
  ComponentPropsWithRef,
  cloneElement,
  isValidElement,
} from "react";

export interface IFeatureCardProps extends ComponentPropsWithRef<"div"> {
  title: string;
  color: string;
  icon: React.ReactNode;
}
export const FeatureCard: FC<IFeatureCardProps> = ({ color, title, icon }) => {
  return (
    <Paper withBorder shadow="xs">
      <Box
        style={{
          backgroundColor: color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 60,
          fontSize: 26,
          color: "white",
          fontWeight: 700,
        }}
      >
        {title}
      </Box>
      <Box my={50}>
        <Box my={20}>
          {isValidElement(icon) && cloneElement(icon, { color })}
        </Box>
      </Box>
    </Paper>
  );
};
