import { Box, Group } from "@mantine/core";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    fetch(`/api/course/${params.id}`).then((res) => {
      res.json().then((data) => {
        setCourse(data);
      });
    });
  }, []);

  return (
    <Box sx={{ display: "flex", height: "100vh", flexDirection: "column" }}>
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
      <Box sx={{ flexGrow: 1 }}> </Box>
      <Footer withBorder />
    </Box>
  );
};
