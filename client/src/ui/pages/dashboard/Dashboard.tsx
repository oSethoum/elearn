import { FC, useState } from "react";
import {
  Box,
  BoxProps,
  Group,
  Header,
  Text,
  Drawer,
  UnstyledButton,
  MediaQuery,
  Burger,
  ActionIcon,
} from "@mantine/core";
import { useAppContext } from "@/context/";
import {
  Link,
  Navigate,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import {
  BackButton,
  ColorSchemeButton,
  Footer,
  UserButton,
} from "@/ui/components";
import { useTranslation } from "react-i18next";
import {
  MdDashboard,
  MdPerson,
  MdAccountBalance,
  MdBook,
} from "react-icons/md";

export interface IDashboardProps extends BoxProps<"div"> {}

export const Dashboard: FC<IDashboardProps> = () => {
  const { user } = useAppContext();
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const [opened, setOpened] = useState(false);
  const closeDrawer = () => setOpened(false);

  const data = [
    {
      link: "/dashboard",
      label: t("dashboard"),
      icon: MdDashboard,
      color: "violet",
    },
    {
      link: "/dashboard/users",
      label: t("users"),
      icon: MdPerson,
      color: "blue",
    },
    {
      link: "departments",
      label: t("departments"),
      color: "green",
      icon: MdAccountBalance,
    },
    {
      link: "courses",
      label: t("courses"),
      color: "red",
      icon: MdBook,
    },
  ];

  const checkLink = (index: number, link: string) => {
    if (index == 0) {
      return pathname.endsWith(link);
    } else {
      return pathname.includes(link);
    }
  };

  const Links = () => (
    <Group m={15} direction="column" grow>
      {data.map((item, index) => (
        <Link tabIndex={-1} to={item.link}>
          <UnstyledButton
            onClick={closeDrawer}
            sx={(theme) => ({
              borderRadius: 10,
              color: !checkLink(index, item.link)
                ? theme.colorScheme === "dark"
                  ? theme.colors.gray[4]
                  : theme.colors.dark[7]
                : theme.colors[item.color][7],
              cursor: "pointer",
              fontWeight: 500,
              backgroundColor: !checkLink(index, item.link)
                ? theme.colorScheme === "dark"
                  ? theme.colors.dark[9]
                  : theme.colors.gray[2]
                : theme.colorScheme === "dark"
                ? `${theme.colors[item.color][7]}20`
                : theme.colors[item.color][1],
              width: "100%",
              "&:hover": {
                backgroundColor: !checkLink(index, item.link)
                  ? theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[4]
                  : theme.colorScheme === "dark"
                  ? `${theme.colors[item.color][7]}30`
                  : `${theme.colors[item.color][6]}50`,
                color: theme.colors[item.color][7],
              },
            })}
            p={10}
          >
            <Group>
              <item.icon size={25} />
              {t(item.label)}
            </Group>
          </UnstyledButton>
        </Link>
      ))}
    </Group>
  );

  return user?.role !== "admin" ? (
    <Navigate to="/404" />
  ) : (
    <Box sx={{ minHeight: "100vh" }}>
      <Drawer
        withCloseButton={false}
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <Box mt={50}>
          <Links />
        </Box>
      </Drawer>
      {/* @ts-ignore */}
      <Header
        sx={{
          height: "auto",
          minHeight: 65,
          alignItems: "center",
          display: "flex",
          position: "sticky",
        }}
        px="lg"
      >
        <Group sx={{ flexGrow: 1 }} position="apart" direction="row">
          <Group>
            <ActionIcon
              component="div"
              onClick={() => setOpened(true)}
              radius="xl"
              size="xl"
            >
              <Burger opened={opened} />
            </ActionIcon>
            <MediaQuery smallerThan="md" styles={{ display: "none" }}>
              <Box>
                <BackButton to="/" />
              </Box>
            </MediaQuery>
          </Group>
          <Text size="xl" weight="bold">
            {t("dashboard")}
          </Text>
          <Group>
            <UserButton />
            <ColorSchemeButton />
          </Group>
        </Group>
      </Header>
      <Box sx={{ display: "flex" }}>
        <Box
          m={20}
          sx={{
            flexGrow: 1,
          }}
        >
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Dashboard;
