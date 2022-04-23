import { Box, Center, Container, Group, Tabs } from "@mantine/core";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBook, FaBookOpen, FaVideo } from "react-icons/fa";
import { useParams } from "react-router-dom";
import {
  BackButton,
  ColorSchemeButton,
  Footer,
  Header,
  UserButton,
} from "../../components";

export const Course = () => {
  const params = useParams();
  const [course, setCourse] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    fetch(`/api/course/${params.id}`).then((res) => {
      res.json().then((data) => {
        setCourse(data);
      });
    });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Header
        rightSide={
          <Group direction="row">
            <UserButton />
            <ColorSchemeButton />
          </Group>
        }
        leftSide={<BackButton />}
        withBorder
        responsive
      />
      <Box sx={{ flexGrow: 1 }}>
        <Tabs grow>
          <Tabs.Tab
            icon={<FaBook />}
            label={t("lessons")}
            color="red"
          ></Tabs.Tab>
          <Tabs.Tab
            icon={<FaBookOpen />}
            label={t("homeWorks")}
            color="green"
          ></Tabs.Tab>
          <Tabs.Tab
            icon={<FaVideo />}
            label={t("zoomMeetings")}
            color="blue"
          ></Tabs.Tab>
        </Tabs>
      </Box>
      <Footer withBorder />
    </Box>
  );
};
