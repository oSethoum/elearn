import {
  ActionIcon,
  Box,
  Button,
  Container,
  Group,
  Modal,
  Paper,
  Select,
  SimpleGrid,
  Title,
} from "@mantine/core";
import CourseCard from "../../components/CourseCard";
import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { FiFilter } from "react-icons/fi";
import {
  UserButton,
  ColorSchemeButton,
  Header,
  BackButton,
  Footer,
} from "../../components";
import { useEffect, useState } from "react";

export function Courses() {
  const theme = useMantineTheme();
  const tablet = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (!tablet) {
      setOpened(false);
    }
  }, [tablet]);

  const FilterForm = () => (
    <Paper p={20} withBorder>
      <form>
        <SimpleGrid cols={1} spacing="lg">
          <Select
            label="Department"
            data={[
              { label: "Physics", value: "ph" },
              { label: "Computer Science", value: "cs" },
            ]}
            placeholder="Department"
          />
          <Select
            label="Class"
            data={[{ label: "Physics", value: "ph" }]}
            placeholder="Class"
          />
          <Select
            label="Grade"
            placeholder="Grade"
            data={["1", "2", "3", "4"]}
          />

          <Button onClick={() => setOpened(false)}>Filter</Button>
        </SimpleGrid>
      </form>
    </Paper>
  );

  return (
    <>
      <Modal
        opened={opened}
        size="80%"
        title={<Title order={2}>Filter</Title>}
        onClose={() => setOpened(false)}
      >
        <FilterForm />
      </Modal>
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
      ></Header>
      <Container my={20} size="xl" sx={{ display: "flex", gap: 15 }}>
        <Box
          sx={{
            position: "sticky",
            zIndex: 2,
            top: 65,
            display: tablet ? "none" : "block",
            width: 800,
          }}
          mb={20}
        >
          <FilterForm />
        </Box>

        <Box>
          <Paper
            withBorder
            p={10}
            mb={10}
            sx={{ position: "sticky", top: 65, zIndex: 2 }}
          >
            <Group position="apart">
              <h2 style={{ marginTop: 0, marginBottom: 0 }}>Courses</h2>
              {tablet && (
                <ActionIcon
                  onClick={() => setOpened(!opened)}
                  size="xl"
                  radius="xl"
                >
                  <FiFilter size={28} />
                </ActionIcon>
              )}
            </Group>
          </Paper>

          <CourseCard
            title="Artificial Intelligence"
            description="
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Laudantium voluptatum dolorum quasi? Soluta ex nemo tempora
          odit quas officia ullam, dolorum architecto. Ratione excepturi
                  tenetur veniam iste exercitationem explicabo culpa.
                "
            video={true}
            meeting={true}
            author="Benkadour"
            id="1212212"
            src="https://cdnuploads.aa.com.tr/uploads/Contents/2020/12/02/thumbs_b_c_d964d85c0b58d7f3b08c1b17631787d9.jpg?v=220851"
          />
        </Box>
      </Container>
      <Footer withBorder />
    </>
  );
}

export default Courses;
