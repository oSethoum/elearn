import {
  ActionIcon,
  Affix,
  Box,
  Button,
  Card,
  Container,
  Group,
  List,
  SimpleGrid,
  Space,
  Text,
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

// import images
import science from "@/assets/science.jpg";
import languages from "@/assets/languages.jpg";
import arabic from "@/assets/arabic.jpeg";
import { DepartmentCard } from "@/ui/components/DepartmentCard";

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
            title={t("videoConferences")}
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
          <DepartmentCard
            title={t("departmentOfExactSciences")}
            description={
              <Box p={20} sx={{ textAlign: "left" }}>
                <Text size="xl">{t("topics")} :</Text>
                <Space h={8} />
                <Text size="lg" color="blue">
                  {t("mathematicsAndPhysics")}
                </Text>
                <Text>{t("teacherOfMiddleEducation")}</Text>
                <Space h={5} />
                <Text size="lg" color="blue">
                  {t("mathematicsPhysicsAndComputerScience")}
                </Text>
                <Text>{t("teacherOfSecondaryEducation")}</Text>
              </Box>
            }
            image={science}
          />

          <DepartmentCard
            title={t("departmentOfForeignLanguages")}
            description={
              <Box p={20} sx={{ textAlign: "left" }}>
                <Text size="xl">{t("topics")} :</Text>
                <Space h={8} />
                <Text size="lg" color="blue">
                  {t("frenchLanguage")}
                </Text>
                <Text>{t("teacherOfSecondaryEducation")}</Text>
                <Space h={5} />
                <Text size="lg" color="blue">
                  {t("englishLanguage")}
                </Text>
                <Text>{t("teacherOfSecondaryEducation")}</Text>
              </Box>
            }
            image={languages}
          />
          <DepartmentCard
            title={t("departmentOfArabic")}
            description={
              <Box p={20} sx={{ textAlign: "left" }}>
                <Text size="xl">{t("topics")} :</Text>
                <Space h={8} />
                <Text size="lg" color="blue">
                  {t("arabicLanguage")}
                </Text>
                <Text>{t("teacherOfPrimaryEducation")}</Text>
              </Box>
            }
            image={arabic}
          />
        </SimpleGrid>
        <Space h={75} />
      </Container>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 600}>
          {(transitionStyles) => (
            <ActionIcon
              style={transitionStyles}
              size={"xl"}
              variant="outline"
              color="blue"
              radius={100}
              onClick={() => scrollTo({ y: 0 })}
            >
              <FaArrowUp />
            </ActionIcon>
          )}
        </Transition>
      </Affix>
      <Footer withBorder />
    </>
  );
}

export default Home;
