import {
  Box,
  Button,
  Center,
  Divider,
  Group,
  Paper,
  Tabs,
  Text,
} from "@mantine/core";

import { useTranslation } from "react-i18next";
import { FaBook, FaBookOpen, FaVideo } from "react-icons/fa";
import { gql, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../../components";
import { LessonCard } from "../../components/LessonCard";
import { useContext } from "react";
import { UserContext } from "../../../context/user";
import { AssignmentCard } from "../../components/AssignmentCard";
import { MeetingCard } from "../../components/MeetingCard";

export const CourseContent = () => {
  const params = useParams();
  const { t } = useTranslation();

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const { loading, data } = useQuery(
    gql`
      query ($courseWhere: CourseWhereUniqueInput!) {
        course(where: $courseWhere) {
          id
          title
          lessons {
            id
            index
            title
            description
            published
          }
          meetings {
            id
            link
            title
            start
            duration
          }
          assignments {
            id
            deadline
            published
          }
        }
      }
    `,

    {
      variables: {
        courseWhere: {
          id: parseInt(params?.courseId as string),
        },
      },
    }
  );

  if (loading) return <Loader height="80vh" />;

  return (
    <>
      <Paper shadow="xs" withBorder p={10} m={10} mx={20}>
        <Text align="center" size="xl" weight="bold">
          {data?.course?.title}
        </Text>
      </Paper>
      <Paper shadow="xs" withBorder m={10} mx={20}>
        <Tabs grow>
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
              {data?.course?.lessons?.length == 0 ? (
                <Center sx={{ height: "80vh" }}>
                  <Text>No Data </Text>
                </Center>
              ) : (
                data?.course?.lessons?.map((lesson) => (
                  <LessonCard
                    key={lesson.title}
                    id={lesson.id}
                    title={lesson.title}
                    description={lesson.description}
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
              {data?.course?.assignments?.length == 0 ? (
                <Center sx={{ height: "80vh" }}>
                  <Text>No Data </Text>
                </Center>
              ) : (
                data?.course?.assignments?.map((assignment) => (
                  <AssignmentCard
                    id={assignment.id}
                    title={assignment.title}
                    description={assignment.description}
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
              {data?.course?.meetings?.length == 0 ? (
                <Center sx={{ height: "80vh" }}>
                  <Text>No Data </Text>
                </Center>
              ) : (
                data?.course?.meetings?.map((meeting) => (
                  <MeetingCard
                    id={meeting.id}
                    title={meeting.title}
                    description={meeting.description}
                    canEdit={user?.role === "teacher"}
                    canDelete={user?.role === "teacher"}
                  />
                ))
              )}
            </Box>
          </Tabs.Tab>
        </Tabs>
      </Paper>
    </>
  );
};

export default CourseContent;
