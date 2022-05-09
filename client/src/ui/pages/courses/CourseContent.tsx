import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Group,
  Paper,
  Tabs,
  Text,
} from "@mantine/core";

import { useTranslation } from "react-i18next";
import { FaBook, FaBookOpen, FaVideo } from "react-icons/fa";
import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../../components";
import { LessonCard } from "../../components/LessonCard";
import { useEffect, useState } from "react";
import { useAppContext } from "@/context";
import { AssignmentCard } from "../../components/AssignmentCard";
import { MeetingCard } from "../../components/MeetingCard";
import { Course, GET_COURSE } from "@/graphql";
import { useUrlQuery } from "@/hooks";

export const CourseContent = () => {
  const params = useParams();
  const query = useUrlQuery();
  const { t } = useTranslation();
  const [course, setCourse] = useState<Course>();
  const { user } = useAppContext();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(0);
  const { loading, data } = useQuery<{ course: Course }>(GET_COURSE, {
    variables: {
      courseWhere: {
        id: parseInt(params?.courseId as string),
      },
    },
  });

  useEffect(() => {
    setCourse(data?.course);
  }, [loading]);

  useEffect(() => {
    if (query.get("tab") === "assignments") {
      setSelectedTab(1);
    } else if (query.get("tab") === "meetings") {
      setSelectedTab(2);
    } else {
      setSelectedTab(0);
    }
  }, [query]);

  const onChange = (active: number) => {
    setSelectedTab(active);
    navigate(
      `/courses/${params?.courseId}/${
        active === 0
          ? "?tab=lessons"
          : active === 1
          ? "?tab=assignments"
          : "?tab=meetings"
      }`
    );
  };

  if (loading) return <Loader height="80vh" />;

  return (
    <Container size="xl">
      <Paper shadow="xs" withBorder p={10} my={20}>
        <Text align="center" size="xl" weight="bold">
          {course?.title}
        </Text>
      </Paper>
      <Paper shadow="xs" withBorder>
        <Tabs onTabChange={onChange} active={selectedTab} grow>
          <Tabs.Tab icon={<FaBook />} label={t("lessons")} color="red">
            <Box sx={{ minHeight: "80vh" }}>
              {user?.role === "teacher" && (
                <>
                  <Group mx={10} mb={10} position="apart">
                    <Button
                      onClick={() => {
                        navigate("lessons/new");
                      }}
                    >
                      {t("add")}
                    </Button>
                  </Group>
                  <Divider />
                </>
              )}
              {course?.lessons?.length == 0 ? (
                <Center sx={{ height: "80vh" }}>
                  <Text>No Data </Text>
                </Center>
              ) : (
                course?.lessons?.map((lesson) => (
                  <LessonCard
                    key={lesson.title}
                    onDelete={() => {
                      setCourse({
                        ...course,
                        lessons: course.lessons.filter(
                          (l) => lesson.id != l.id
                        ),
                      });
                    }}
                    lesson={lesson}
                    canEdit={user?.role === "teacher"}
                    canDelete={user?.role === "teacher"}
                  />
                ))
              )}
            </Box>
          </Tabs.Tab>
          <Tabs.Tab
            icon={<FaBookOpen />}
            label={t("assignments")}
            color="green"
          >
            <Box sx={{ minHeight: "80vh" }}>
              {user?.role === "teacher" && (
                <>
                  <Group mx={10} mb={10} position="apart">
                    <Button
                      onClick={() => {
                        navigate("assignments/new");
                      }}
                    >
                      {t("add")}
                    </Button>
                  </Group>
                  <Divider />
                </>
              )}
              {course?.assignments?.length == 0 ? (
                <Center sx={{ height: "80vh" }}>
                  <Text>No Data</Text>
                </Center>
              ) : (
                course?.assignments?.map((assignment) => (
                  <AssignmentCard
                    key={assignment.title}
                    onDelete={() => {
                      setCourse({
                        ...course,
                        assignments: course.assignments.filter(
                          (a) => assignment.id != a.id
                        ),
                      });
                    }}
                    assignment={assignment}
                    canEdit={user?.role === "teacher"}
                    canDelete={user?.role === "teacher"}
                  />
                ))
              )}
            </Box>
          </Tabs.Tab>
          <Tabs.Tab icon={<FaVideo />} label={t("zoomMeetings")} color="blue">
            <Box sx={{ minHeight: "80vh" }}>
              {user?.role === "teacher" && (
                <>
                  <Group mx={10} mb={10} position="apart">
                    <Button
                      onClick={() => {
                        navigate("meetings/new");
                      }}
                    >
                      {t("add")}
                    </Button>
                  </Group>
                  <Divider />
                </>
              )}
              {course?.meetings?.length == 0 ? (
                <Center sx={{ height: "80vh" }}>
                  <Text>No Data </Text>
                </Center>
              ) : (
                course?.meetings?.map((meeting) => (
                  <MeetingCard
                    key={meeting.id}
                    meeting={meeting}
                    onDelete={() => {
                      setCourse({
                        ...course,
                        meetings: course.meetings.filter(
                          (m) => meeting.id != m.id
                        ),
                      });
                    }}
                    canEdit={user?.role === "teacher"}
                    canDelete={user?.role === "teacher"}
                  />
                ))
              )}
            </Box>
          </Tabs.Tab>
        </Tabs>
      </Paper>
    </Container>
  );
};

export default CourseContent;
