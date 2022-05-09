import { useQuery, gql } from "@apollo/client";
import { Badge, Button, Container, Group } from "@mantine/core";

import { useTranslation } from "react-i18next";
import CourseCard from "@/ui/components/CourseCard";
import { Loader } from "@/ui/components/Loader";
import { useAppContext } from "@/context/";
import { MdAdd } from "react-icons/md";

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
        take: 10,
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
        {user?.role === "student" ? (
          <Badge size="lg">
            {user?.student?.topic?.name} {t("year")} {user?.student?.grade}
          </Badge>
        ) : (
          <span></span>
        )}
        {user?.role === "admin" && (
          <Button leftIcon={<MdAdd size={20} />}>{t("add")}</Button>
        )}
      </Group>
      {loading ? (
        <Loader height="80vh" />
      ) : (
        courses.courses.map((course) => (
          <CourseCard
            id={course.id}
            key={course.id}
            title={course.title}
            description={course.description}
            canDelete={user?.role === "admin"}
            canEdit={user?.role === "admin"}
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
