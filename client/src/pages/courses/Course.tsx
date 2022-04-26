import { Box, Tabs } from "@mantine/core";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBook, FaBookOpen, FaVideo } from "react-icons/fa";
import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";

export const Course = () => {
  const params = useParams();
  const [course, setCourse] = useState(null);
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "80vh",
        flexDirection: "column",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Tabs m={10} grow>
          <Tabs.Tab
            icon={<FaBook />}
            label={t("lessons")}
            color="red"
          ></Tabs.Tab>
          <Tabs.Tab
            icon={<FaBookOpen />}
            label={t("assignments")}
            color="green"
          ></Tabs.Tab>
          <Tabs.Tab
            icon={<FaVideo />}
            label={t("zoomMeetings")}
            color="blue"
          ></Tabs.Tab>
        </Tabs>
      </Box>
    </Box>
  );
};

export default Course;
