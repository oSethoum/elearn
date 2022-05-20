import {
  Affix,
  Button,
  Card,
  Container,
  Group,
  SimpleGrid,
  Space,
  Transition,
  useMantineTheme,
} from "@mantine/core";
import { BsCameraVideoFill } from "react-icons/bs";
import {
  MdOutlineAssignmentTurnedIn,
  MdDashboard,
  MdSchool,
} from "react-icons/md";

import { useWindowScroll } from "@mantine/hooks";
import { Link } from "react-router-dom";
import {
  ColorSchemeButton,
  Footer,
  Header,
  UserButton,
} from "../../components";
import { FeatureCard } from "../../components/FeatureCard";
import { HeroSection } from "../../components/HeroSection";
import { FaBook, FaUniversity, FaRocket, FaArrowUp } from "react-icons/fa";

import { useAppContext } from "@/context/";
import { useTranslation } from "react-i18next";

export function Home() {
  const theme = useMantineTheme();
  const { t } = useTranslation();
  const [scroll, scrollTo] = useWindowScroll();
  const {
    user,
    departmentsRef,
    featuresRef,
    scrollToDepartments,
    scrollToFeatures,
  } = useAppContext();
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
          <Button
            leftIcon={<FaRocket />}
            onClick={() => {
              scrollToFeatures();
            }}
          >
            {t("features")}
          </Button>
          <Button
            leftIcon={<FaUniversity />}
            onClick={() => {
              scrollToDepartments();
            }}
            color="green"
          >
            {t("departments")}
          </Button>
          <Link to="about-us">
            <Button leftIcon={<MdSchool />} color="orange">
              {t("aboutUs")}
            </Button>
          </Link>
          {user && (
            <Link to="courses">
              <Button leftIcon={<FaBook />} color="red">
                {t("courses")}
              </Button>
            </Link>
          )}
          {user?.role === "admin" && (
            <Link to="/dashboard">
              <Button color="violet" leftIcon={<MdDashboard />}>
                {t("dashboard")}
              </Button>
            </Link>
          )}
        </Group>
      </Header>
      <HeroSection />
      {/* Features section */}
      <Container
        size="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* @ts-ignore */}
        <Space h={90} ref={featuresRef} />
        <Card withBorder>
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

        <Space h={50} />
        <SimpleGrid
          cols={3}
          spacing="lg"
          sx={{ textAlign: "center" }}
          breakpoints={[{ maxWidth: theme.breakpoints.sm, cols: 1 }]}
        >
          <FeatureCard
            title={t("lessons")}
            color={theme.colors.teal[5]}
            icon={<FaBook size={120} />}
          />
          <FeatureCard
            title={t("homeWorks")}
            color={theme.colors.orange[7]}
            icon={<MdOutlineAssignmentTurnedIn size={120} />}
          />
          <FeatureCard
            title={t("videoConference")}
            color={theme.colors.blue[5]}
            icon={<BsCameraVideoFill size={120} />}
          />
        </SimpleGrid>
        <Space h={75} />
        {/* @ts-ignore */}
        <Space h={90} ref={departmentsRef} />
        <Card withBorder>
          <h1
            style={{
              textAlign: "center",
              margin: 0,
              color: theme.colors.green[6],
            }}
          >
            {t("departments")}
          </h1>
        </Card>

        <Space h={50} />
        <SimpleGrid
          cols={3}
          spacing="lg"
          sx={{ textAlign: "center" }}
          breakpoints={[{ maxWidth: theme.breakpoints.sm, cols: 1 }]}
        >
          <FeatureCard
            title={t("lessons")}
            color={theme.colors.teal[5]}
            icon={<FaBook size={120} />}
          />
          <FeatureCard
            title={t("homeWorks")}
            color={theme.colors.orange[7]}
            icon={<MdOutlineAssignmentTurnedIn size={120} />}
          />
          <FeatureCard
            title={t("videoConference")}
            color={theme.colors.blue[5]}
            icon={<BsCameraVideoFill size={120} />}
          />
        </SimpleGrid>
        <Space h={75} />
      </Container>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 600}>
          {(transitionStyles) => (
            <Button
              leftIcon={<FaArrowUp />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              {t("backToTop")}
            </Button>
          )}
        </Transition>
      </Affix>
      <Footer withBorder />
    </>
  );
}

export default Home;
