import { Text, Box, Container, Group, Paper } from "@mantine/core";
import CourseCard from "../../components/CourseCard";
import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { gql, useQuery } from "@apollo/client";

import {
  UserButton,
  ColorSchemeButton,
  Header,
  BackButton,
  Footer,
  Loader,
} from "../../components";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user";

export function Courses() {
  const theme = useMantineTheme();
  const tablet = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
  const { user } = useContext(UserContext);
  const [opened, setOpened] = useState(false);

  const { loading, data: courses } = useQuery(
    gql`
      query CoursesQuery($where: CourseWhereInput) {
        courses(where: $where) {
          id
          title
          description
          teacher {
            firstName
            lastName
          }
          _count {
            lessons
            assignments
            meetings
          }
        }
      }
    `,
    {
      variables: {
        where: user?.student
          ? {
              AND: [
                { topicId: { equals: user?.student?.topicId } },
                { grade: { equals: user?.student?.grade } },
              ],
            }
          : user?.teacher
          ? {
              teacherId: { equals: user?.teacher?.id },
            }
          : {},
      },
    }
  );

  console.log(user);

  useEffect(() => {
    if (!tablet) {
      setOpened(false);
    }
  }, [tablet]);

  return (
    <>
      <Header
        rightSide={
          <Group direction="row">
            <UserButton />
            <ColorSchemeButton />
          </Group>
        }
        leftSide={<BackButton />}
        withBorder
      >
        <Text weight="bold" align="center" size="xl">
          Courses
        </Text>
      </Header>
      <Container
        my={20}
        size="xl"
        sx={{ display: "flex", gap: 15, flexDirection: "column" }}
      >
        {loading ? (
          <Loader />
        ) : (
          courses.courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              meeting={course._count.meetings > 0}
              author={
                course.teacher &&
                course.teacher?.firstName + " " + course.teacher?.lastName
              }
              id={course.id}
            />
          ))
        )}
      </Container>
      <Footer withBorder />
    </>
  );
}

export default Courses;
