import { useAssignmentQuery } from "@/graphql";
import {
  Box,
  Card,
  Container,
  createStyles,
  Divider,
  Title,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const styles = createStyles((theme) => ({
  title: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[2],
  },
}));

export const Lesson = () => {
  const { classes } = styles();
  const params = useParams();
  const { t } = useTranslation();
  const { data } = useAssignmentQuery({
    variables: {
      where: {
        id: parseInt(params.assignmentId as string),
      },
    },
  });

  return (
    <Container size="xl" sx={{ minHeight: "60vh" }}>
      <Card withBorder p={0} my={20}>
        <Box p={5} px={15} className={classes.title}>
          <Title>{data?.assignment?.title}</Title>
        </Box>
        <Divider />
        <Box
          p={20}
          sx={(theme) => ({
            "& iframe": {
              width: 25 * 16,
              height: 25 * 9,
              [theme.fn.largerThan("md")]: {
                width: 35 * 16,
                height: 35 * 9,
              },
              [theme.fn.largerThan("lg")]: {
                width: 45 * 16,
                height: 45 * 9,
              },
            },
          })}
          dangerouslySetInnerHTML={{
            __html: data?.assignment?.content as string,
          }}
        ></Box>
      </Card>
    </Container>
  );
};

export default Lesson;
