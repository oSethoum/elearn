import { useQuery, gql } from "@apollo/client";
import { Badge, Button, Container, Group } from "@mantine/core";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import CourseCard from "../../components/CourseCard";
import { Loader } from "../../components/Loader";
import { UserContext } from "../../context/user";

export const CourseList = () => {
  const { user } = useContext(UserContext);
  const { t } = useTranslation();

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

  return (
    <Container
      my={20}
      size="xl"
      sx={{ display: "flex", gap: 15, flexDirection: "column" }}
    >
      <Group position="apart">
        <Badge size="lg">
          {user?.student?.topic?.name} {t("year")} {user?.student?.grade}
        </Badge>
        {user?.role === "admin" && <Button>{t("addCourse")}</Button>}
      </Group>
      {loading ? (
        <Loader />
      ) : (
        courses.courses.map((course) => (
          <CourseCard
            id={course.id}
            key={course.id}
            title={course.title}
            description={course.description}
            meeting={course._count.meetings > 0}
            lessons={course._count.lessons}
            assignments={course._count.assignments}
            author={
              course.teacher &&
              course.teacher?.firstName + " " + course.teacher?.lastName
            }
          />
        ))
      )}
    </Container>
  );
};

export default CourseList;
