import { ComponentProps, FC } from "react";
import { Box, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({}));

export interface NewsCardProps extends ComponentProps<"div"> {
  image: string;
}

export const NewsCard: FC<NewsCardProps> = () => {
  const { classes } = useStyles();
  return (
    <Box>
    </Box>
  );
};
