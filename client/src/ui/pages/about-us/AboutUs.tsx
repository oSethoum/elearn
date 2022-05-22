import {
  BackButton,
  ColorSchemeButton,
  Footer,
  Header,
  UserButton,
} from "@/ui/components";
import {
  Box,
  Container,
  Group,
  Text,
  BackgroundImage,
  Title,
  List,
  AspectRatio,
  SimpleGrid,
  Space,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import about from "@/assets/about.jpg";
import { useAppContext } from "@/context";

const AboutUsFr = () => (
  <Box mb={100}>
    <Title
      order={1}
      sx={(theme) => ({
        color: theme.colors.blue[7],
      })}
    >
      Présentation
    </Title>
    <SimpleGrid
      breakpoints={[
        {
          maxWidth: "md",
          cols: 1,
        },
      ]}
      cols={2}
    >
      <Box>
        <Text component="p">
          L’École normale supérieure d’Oran (ENS d'Oran) a été créée par décret
          exécutif n°14-230 du 29 Chaoual 1435 correspondants au 25 août 2014 et
          publié dans le journal officiel n°51 daté du 31 août 2014.
        </Text>
        <Text component="p">
          L’école est sous la tutelle du ministère de l’enseignement supérieur
          et de la recherche scientifique et a pour vocation première de former
          les nouveaux bacheliers au métier de l’enseignement dans les 03 cycles
          : primaire, moyen et secondaire.
        </Text>
        <Text component="p">
          Les bacheliers recevront les formations pour pouvoir accéder au poste
          de :
        </Text>
        <List>
          <List.Item>
            Professeur d’Enseignement primaire (PEP) : Bac + 3
          </List.Item>
          <List.Item>Professeur d’enseignement Moyen (PEM) : Bac+ 4</List.Item>
          <List.Item>
            Professeur d’enseignement Secondaire (PES) : Bac+ 5
          </List.Item>
        </List>
      </Box>
      <AspectRatio mx="auto" sx={{ width: "100%" }} ratio={16 / 9}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12963.955218997913!2d-0.6366982889160159!3d35.677277652528694!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e8a10f1f51a41%3A0x50eee2f1c0b0897b!2sSchool%20Par%20Sup%C3%A9rieure%20D&#39;oran!5e0!3m2!1sen!2sdz!4v1652246734884!5m2!1sen!2sdz"
          title="Google map"
          frameBorder="0"
        />
      </AspectRatio>
    </SimpleGrid>

    {/* <Text mt={60}>
      L’école est un établissement public, à caractère administratif doté de la
      personnalité morale et de l’autonomie financière.
    </Text> */}

    <Space h={20} />

    <Title
      order={2}
      sx={(theme) => ({
        color: theme.colors.blue[7],
      })}
    >
      L’Ecole Normale Supérieure d’Oran assure 
    </Title>
    <List>
      <List.Item>
        La garantie de l’emploi : l'étudiant est formé pour devenir un
        professeur permanent de l’Education Nationale.
      </List.Item>
      <List.Item>
        La qualité de la formation qui est articulée autour de deux volets
        complémentaires : la théorie et le stage pratique.
      </List.Item>
      <List.Item>La richesse et la diversité des enseignements.</List.Item>
      <List.Item>
        Le sérieux et la motivation de sa population estudiantine, choisie parmi
        les lauréats du baccalauréat.
      </List.Item>
    </List>
  </Box>
);

const AboutUsEn = () => (
  <Box mb={100}>
    <Title
      order={1}
      sx={(theme) => ({
        color: theme.colors.blue[7],
      })}
    >
      Presentation
    </Title>
    <SimpleGrid
      breakpoints={[
        {
          maxWidth: "md",
          cols: 1,
        },
      ]}
      cols={2}
    >
      <Box>
        <Text component="p">
          Oran’s Higher Teachers College (ENS d'Oran) was created by executive
          decree n°14-230 of 29 Chaoual 1435 corresponding to August 25, 2014,
          and published in the official journal n°51 dated August 31, 2014.
        </Text>
        <Text component="p">
          The school is under the supervision of the Ministry of Higher
          Education and Scientific Research and its primary purpose is to train
          new graduates for the teaching profession in the three cycles:
          primary, middle, and secondary.
        </Text>
        <Text component="p">
          Baccalaureate graduates will receive training to qualify for the
          position:
        </Text>
        <List>
          <List.Item>Primary Education Teacher (PEP): Bac + 3</List.Item>
          <List.Item>Middle School Teacher (PEM): Bac+ 4</List.Item>
          <List.Item>Secondary School Teacher (PES): Bac+ 5</List.Item>
        </List>
      </Box>
      <AspectRatio mx="auto" sx={{ width: "100%" }} ratio={16 / 9}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12963.955218997913!2d-0.6366982889160159!3d35.677277652528694!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e8a10f1f51a41%3A0x50eee2f1c0b0897b!2sSchool%20Par%20Sup%C3%A9rieure%20D&#39;oran!5e0!3m2!1sen!2sdz!4v1652246734884!5m2!1sen!2sdz"
          title="Google map"
          frameBorder="0"
        />
      </AspectRatio>
    </SimpleGrid>

    {/* <Text mt={60}>
      The school is a public establishment, with an administrative character,
      legal personality, and financial autonomy.
    </Text> */}

    <Space h={20} />
    <Title
      order={2}
      sx={(theme) => ({
        color: theme.colors.blue[7],
      })}
    >
      Higher Teacher Training School of ORAN provides
    </Title>
    <List>
      <List.Item>
        The guarantee of employment: the student is trained to become a
        permanent teacher in the National Education.
      </List.Item>
      <List.Item>
        The quality of the training is articulated around two complementary
        aspects: theory and practical training.
      </List.Item>
      <List.Item>The richness and diversity of the teaching.</List.Item>
      <List.Item>
        The seriousness and motivation of its student, chosen from among the
        baccalaureate graduates.
      </List.Item>
    </List>
  </Box>
);
const AboutUsAr = () => (
  <Box mb={100}>
    <Title
      order={1}
      sx={(theme) => ({
        color: theme.colors.blue[7],
      })}
    >
      المقدمة
    </Title>
    <SimpleGrid
      breakpoints={[
        {
          maxWidth: "md",
          cols: 1,
        },
      ]}
      cols={2}
    >
      <Box>
        <Text component="p">
          تم إنشاء المدرسة العليا للأساتذة بوهران (ENS D' Oran) بموجب المرسوم
          التنفيذي رقم 14-230 لمراسلي 29 شاوال 1435 اعتبارًا من 25 أغسطس 2014
          ونشرت في الجريدة الرسمية رقم 51 بتاريخ 31 أغسطس 2014.
        </Text>
        <Text component="p">
          وتخضع المدرسة لإشراف وزارة التعليم العالي والبحث العلمي والغرض الأساسي
          منها هو تدريب خريجين جدد لمهنة التدريس في الاطوار الثلاث: الابتدائية
          والمتوسطة والثانوية
        </Text>
        <Space h={20} />
        <Text component="p">يتلقى خريجو البكالوريا تدريب للتأهل لوظيفة:</Text>
        <List>
          <List.Item>مدرس التعليم الابتدائي: بكالوريا + 3</List.Item>
          <List.Item>مدرس المدرسة الإعدادية: بكالوريا + 4</List.Item>
          <List.Item>مدرس ثانوي: بكالوريا + 5</List.Item>
        </List>
      </Box>
      <AspectRatio mx="auto" sx={{ width: "100%" }} ratio={16 / 9}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12963.955218997913!2d-0.6366982889160159!3d35.677277652528694!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e8a10f1f51a41%3A0x50eee2f1c0b0897b!2sSchool%20Par%20Sup%C3%A9rieure%20D&#39;oran!5e0!3m2!1sen!2sdz!4v1652246734884!5m2!1sen!2sdz"
          title="Google map"
          frameBorder="0"
        />
      </AspectRatio>
    </SimpleGrid>

    {/* <Text mt={60}>
      المدرسة مؤسسة عامة ذات طابع إداري وشخصية قانونية واستقلالية مالية
    </Text> */}

    <Title
      order={2}
      sx={(theme) => ({
        color: theme.colors.blue[7],
      })}
    >
      توفر المدرسة العليا للأساتذة بوهران
    </Title>
    <List>
      <List.Item>
        ضمان العمل: يتم تدريب الطالب ليصبح مدرسا دائما في التعليم الوطني.
      </List.Item>
      <List.Item>
        تتمحور نوعية التدريب حول جانبين متكاملين: النظرية والتدريب العملي.
      </List.Item>
      <List.Item>ثراء التعليم وتنوعه.</List.Item>
      <List.Item>جدية وحافز طالبها المختار من بين خريجي البكالوريا.</List.Item>
    </List>
  </Box>
);

export const AboutUs = () => {
  const { t } = useTranslation();
  const { language } = useAppContext();
  return (
    <Box>
      <Header
        leftSide={<BackButton />}
        withBorder
        rightSide={
          <Group direction="row">
            <UserButton />
            <ColorSchemeButton />
          </Group>
        }
      >
        <Text size="xl" align="center" weight="bold">
          {t("aboutUs")}
        </Text>
      </Header>
      <BackgroundImage
        sx={{ width: "100%", maxWidth: "100%", position: "relative" }}
        src={about}
      >
        <Box
          sx={{
            height: 300,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            maxWidth: "100%",
            right: 0,
            bottom: 0,
          }}
        ></Box>
      </BackgroundImage>
      <Container size="xl" sx={{ minHeight: "50vh" }} mt={40}>
        {language === "fr" ? (
          <AboutUsFr />
        ) : language === "en" ? (
          <AboutUsEn />
        ) : (
          <AboutUsAr />
        )}
      </Container>
      <Footer />
    </Box>
  );
};

export default AboutUs;
