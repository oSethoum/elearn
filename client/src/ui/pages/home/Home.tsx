import {
  Box,
  Button,
  Card,
  Group,
  SimpleGrid,
  Space,
  useMantineTheme,
} from "@mantine/core";
import { BsCameraVideoFill } from "react-icons/bs";
import { GiProgression } from "react-icons/gi";
import { MdOutlineAssignmentTurnedIn, MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  ColorSchemeButton,
  Footer,
  Header,
  Logo,
  UserButton,
} from "../../components";
import { FeatureCard } from "../../components/FeatureCard";
import { HeroSection } from "../../components/HeroSection";
import { FaBook, FaUniversity, FaRocket, FaQuestion } from "react-icons/fa";

import { useContext } from "react";
import { useAppContext } from "@/context/";
import { useTranslation } from "react-i18next";

export function Home() {
  const theme = useMantineTheme();
  const { t } = useTranslation();
  const { user } = useAppContext();
  return (
    <>
      <Header
        rightSide={
          <Group direction="row">
            <UserButton />
            <ColorSchemeButton />
          </Group>
        }
        withBorder
        responsive
      >
        <Group>
          <Logo width={100} />
          <Button leftIcon={<FaRocket />} ml={20} radius="xl">
            {t("features")}
          </Button>
          <Button leftIcon={<FaUniversity />} radius="xl" color="green">
            {t("departments")}
          </Button>
          <Link to="about-us">
            <Button leftIcon={<FaQuestion />} radius="xl" color="orange">
              {t("aboutUs")}
            </Button>
          </Link>
          {user && (
            <Link to="courses">
              <Button leftIcon={<FaBook />} radius="xl" color="red">
                {t("courses")}
              </Button>
            </Link>
          )}
          {user?.role === "admin" && (
            <Link to="/dashboard">
              <Button color="violet" leftIcon={<MdDashboard />} radius="xl">
                {t("dashboard")}
              </Button>
            </Link>
          )}
        </Group>
      </Header>
      <HeroSection />
      {/* Features section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card
            sx={{ width: "70%", border: `2px solid ${theme.colors.blue[7]}` }}
            my={40}
          >
            <h1
              style={{
                textAlign: "center",
                margin: 0,
                color: theme.colors.blue[5],
              }}
            >
              {t("features")}
            </h1>
          </Card>
        </Box>
        <SimpleGrid
          px={20}
          mt={20}
          cols={3}
          spacing="lg"
          sx={{ textAlign: "center" }}
          breakpoints={[{ maxWidth: theme.breakpoints.sm, cols: 1 }]}
        >
          <FeatureCard
            title={t("progressiveLearning")}
            color={theme.colors.indigo[5]}
            icon={<GiProgression size={120} />}
          />
          <FeatureCard
            title={t("homeWorkSubmissions")}
            color={theme.colors.teal[7]}
            icon={<MdOutlineAssignmentTurnedIn size={120} />}
          />
          <FeatureCard
            title={t("zoomMeetings")}
            color={theme.colors.blue[5]}
            icon={<BsCameraVideoFill size={120} />}
          />
        </SimpleGrid>
      </Box>
      <Space h={120} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card
          sx={{ width: "70%", border: `2px solid ${theme.colors.green[7]}` }}
          my={40}
        >
          <h1
            style={{
              textAlign: "center",
              margin: 0,
              color: theme.colors.green[5],
            }}
          >
            {t("departments")}
          </h1>
        </Card>
      </Box>
      <Footer withBorder />
    </>
  );
}

export default Home;
