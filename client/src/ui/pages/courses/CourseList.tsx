import { useQuery, gql } from "@apollo/client";
import { Badge, Container, Group } from "@mantine/core";
import { useTranslation } from "react-i18next";
import CourseCard from "@/ui/components/CourseCard";
import { Loader } from "@/ui/components/Loader";
import { useAppContext } from "@/context/";
import { Fragment } from "react";

export const CourseList = () => {
  const { user } = useAppContext();
  const { t } = useTranslation();
  const { loading, data: courses } = useQuery(
    gql`
      query CoursesQuery(
        $where: CourseWhereInput
        $orderBy: [CourseOrderByWithRelationInput!]
        $take: Int
      ) {
        courses(where: $where, orderBy: $orderBy, take: $take) {
          id
          title
          description
          topic {
            id
            name
          }

          grade

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
              // teacherId: { equals: user?.teacher?.id },
            }
          : {},
        orderBy: {
          topicId: "asc",
        },
      },
    }
  );

  if (loading) {
    return <Loader height={"80vh"} />;
  }

  let currentTopicGrade =
    courses.courses[0].topic.name + " " + courses.courses[0].grade;
  return (
    <Container
      my={20}
      size="xl"
      sx={{ display: "flex", gap: 15, flexDirection: "column" }}
    >
      {loading ? (
        <Loader height="80vh" />
      ) : (
        courses.courses.map((course, index) => {
          const show =
            index === 0 ||
            currentTopicGrade !== `${course.topic.name} ${course.grade}`;
          if (currentTopicGrade !== `${course.topic.name} ${course.grade}`) {
            currentTopicGrade = `${course.topic.name} ${course.grade}`;
          }
          return (
            <Fragment key={course.id}>
              {show ? (
                <Badge size="xl" mt="lg">
                  {course.topic.name} {course.grade}
                </Badge>
              ) : null}
              <CourseCard
                id={course.id}
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
            </Fragment>
          );
        })
      )}
    </Container>
  );
};

export default CourseList;
