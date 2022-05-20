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
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../../components";
import { LessonCard } from "../../components/LessonCard";
import { useEffect, useState } from "react";
import { useAppContext } from "@/context";
import { AssignmentCard } from "../../components/AssignmentCard";
import { MeetingCard } from "../../components/MeetingCard";
import {
  Assignment,
  Lesson,
  Meeting,
  namedOperations,
  useCourseQuery,
  useDeleteAssignmentMutation,
  useDeleteLessonMutation,
  useDeleteMeetingMutation,
} from "@/graphql";
import { useUrlQuery } from "@/hooks";
import { useModals } from "@mantine/modals";
import { ImFilesEmpty } from "react-icons/im";

export const CourseContent = () => {
  const modals = useModals();
  const [deleteLesson] = useDeleteLessonMutation();
  const params = useParams();
  const query = useUrlQuery();
  const { t } = useTranslation();
  const { user } = useAppContext();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(0);
  const [deleteAssignment] = useDeleteAssignmentMutation();
  const [deleteMeeting] = useDeleteMeetingMutation();
  const { loading, data } = useCourseQuery({
    variables: {
      where: {
        id: parseInt(params?.courseId as string),
      },
    },
  });

  useEffect(() => {
    if (query.get("tab") === "assignments") {
      setSelectedTab(1);
    } else if (query.get("tab") === "meetings") {
      setSelectedTab(2);
    } else {
      setSelectedTab(0);
    }
  }, [query]);

  if (loading) return <Loader height="80vh" />;

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

  return (
    <Container size="xl">
      <Paper shadow="xs" withBorder p={10} my={20}>
        <Text align="center" size="xl" weight="bold">
          {data?.course?.title}
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
              {data?.course?.lessons?.length == 0 ? (
                <Center sx={{ height: "80vh" }}>
                  <Group direction="column">
                    <ImFilesEmpty size={36} />
                    <Text>{t("empty")}</Text>
                  </Group>
                </Center>
              ) : (
                data?.course?.lessons?.map((lesson) => (
                  <LessonCard
                    key={lesson.title}
                    lesson={lesson as Lesson}
                    canEdit={user?.role === "teacher"}
                    canDelete={user?.role === "teacher"}
                    onDelete={() => {
                      modals.openConfirmModal({
                        title: t("confirmAction"),
                        children: <Text size="sm">{t("deleteMessage")}</Text>,
                        labels: { confirm: t("confirm"), cancel: t("cancel") },
                        confirmProps: { color: "red" },
                        centered: true,
                        onConfirm: () =>
                          deleteLesson({
                            variables: {
                              where: {
                                id: lesson.id,
                              },
                            },
                            refetchQueries: [namedOperations.Query.Course],
                          }),
                      });
                    }}
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
                  <Group direction="column">
                    <ImFilesEmpty size={36} />
                    <Text>{t("empty")}</Text>
                  </Group>
                </Center>
              ) : (
                data?.course?.assignments?.map((assignment) => (
                  <AssignmentCard
                    key={assignment.id}
                    onDelete={() => {
                      modals.openConfirmModal({
                        title: t("confirmAction"),
                        children: <Text size="sm">{t("deleteMessage")}</Text>,
                        labels: { confirm: t("confirm"), cancel: t("cancel") },
                        confirmProps: { color: "red" },
                        centered: true,
                        onConfirm: () =>
                          deleteAssignment({
                            variables: {
                              where: {
                                id: assignment.id,
                              },
                            },
                            refetchQueries: [namedOperations.Query.Course],
                          }),
                      });
                    }}
                    assignment={assignment as Assignment}
                    canEdit={user?.role === "teacher"}
                    canDelete={user?.role === "teacher"}
                  />
                ))
              )}
            </Box>
          </Tabs.Tab>
          <Tabs.Tab
            icon={<FaVideo />}
            label={t("videoConferences")}
            color="blue"
          >
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
                  <Group direction="column">
                    <ImFilesEmpty size={36} />
                    <Text>{t("empty")}</Text>
                  </Group>
                </Center>
              ) : (
                data?.course?.meetings?.map((meeting) => (
                  <MeetingCard
                    key={meeting.id}
                    meeting={meeting as Meeting}
                    onDelete={() => {
                      modals.openConfirmModal({
                        title: t("confirmAction"),
                        children: <Text size="sm">{t("deleteMessage")}</Text>,
                        labels: { confirm: t("confirm"), cancel: t("cancel") },
                        confirmProps: { color: "red" },
                        centered: true,
                        onConfirm: () =>
                          deleteMeeting({
                            variables: {
                              where: {
                                id: meeting.id,
                              },
                            },
                            refetchQueries: [namedOperations.Query.Course],
                          }),
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
