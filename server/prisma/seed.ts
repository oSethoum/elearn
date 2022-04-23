import { PrismaClient } from "@prisma/client";

interface Topic {
  name: string;
  grades: number;
  courses: {
    create: Course[];
  };
}

interface Course {
  title: string;
  grade: number;
}

interface Department {
  name: string;
  topics: {
    create: Topic[];
  };
}

const departments = [
  {
    name: "Sciences exactes",
    topics: {
      create: [
        {
          name: "Informatique",
          grades: 5,
          courses: {
            create: [
              {
                title: "Analyse",
                grade: 1,
              },
              {
                title: "Algèbre",
                grade: 1,
              },
              {
                title: "Electricité et Electronique",
                grade: 1,
              },
              {
                title: "Architecture des ordinateurs 1",
                grade: 1,
              },
              {
                title: "Algorithmique 1",
                grade: 1,
              },
              {
                title: "Probabilités et statistiques",
                grade: 1,
              },
              {
                title: "Calcul formel et Logique mathématique",
                grade: 1,
              },
              {
                title: "Histoire des sciences",
                grade: 1,
              },
              {
                title: "Français",
                grade: 1,
              },
              {
                title: "Introduction aux sciences de l'éducation",
                grade: 1,
              },
              {
                title: "Analyse numérique",
                grade: 2,
              },
              {
                title: "Algorithmique 2",
                grade: 2,
              },
              {
                title: "Systèmes d'Information 1",
                grade: 2,
              },
              {
                title: "Architecture des ordinateurs 2",
                grade: 2,
              },
              {
                title: "Système d'expoilation 1",
                grade: 2,
              },
              {
                title: "Théorie des langages",
                grade: 2,
              },
              {
                title: "Traitement du signal",
                grade: 2,
              },
              {
                title: "Psychologie de l'enfant et de l'adolescent",
                grade: 2,
              },
              {
                title: "Anglais 1",
                grade: 2,
              },
              {
                title: "Systèmes d'Information 2",
                grade: 3,
              },
              {
                title: "Réseaux 1",
                grade: 3,
              },
              {
                title: "Compilation",
                grade: 3,
              },
              {
                title: "Système d'expoilation 2",
                grade: 3,
              },
              {
                title: "Recherche opérationnelle",
                grade: 3,
              },
              {
                title: "Intelligence artificielle",
                grade: 3,
              },
              {
                title: "Technologie web 1",
                grade: 3,
              },
              {
                title: "Anglais2",
                grade: 3,
              },
              {
                title: "Psychologie",
                grade: 3,
              },
              {
                title: "Technologie web 2",
                grade: 4,
              },
              {
                title: "Réseaux 2",
                grade: 4,
              },
              {
                title: "Programmation objet",
                grade: 4,
              },
              {
                title: "Génie logiciel",
                grade: 4,
              },
              {
                title: "Système expert",
                grade: 4,
              },
              {
                title: "Base de données avancées",
                grade: 4,
              },
              {
                title: "Didactique",
                grade: 4,
              },
              {
                title: "Curricula et évaluation éducative",
                grade: 4,
              },
              {
                title: "Techniques avancées en Informatique",
                grade: 5,
              },
              {
                title: "Sécurité informatique",
                grade: 5,
              },
              {
                title: "Conduite de projet",
                grade: 5,
              },
              {
                title: "Vérification formelle",
                grade: 5,
              },
              {
                title: "Législation scolaire",
                grade: 5,
              },
            ],
          },
        },
        {
          name: "Mathématiques",
          grades: 4,
          courses: {
            create: [
              {
                title: "Algèbre1",
                grade: 1,
              },
              {
                title: "Analyse1",
                grade: 1,
              },
              {
                title: "Base de la mécanique",
                grade: 1,
              },
              {
                title: "Eléctricité et magnétisme",
                grade: 1,
              },
              {
                title: "Structure de la matière",
                grade: 1,
              },
              {
                title: "Thermodynamique chimique",
                grade: 1,
              },
              {
                title: "Introduction au sciences de l'éducation ",
                grade: 1,
              },
              {
                title: "Histoire des sciences",
                grade: 1,
              },
              {
                title: "Algèbre générale",
                grade: 2,
              },
              {
                title: "Algèbre Linéaire",
                grade: 2,
              },
              {
                title: "Analyse 2",
                grade: 2,
              },
              {
                title: "Calcul différentiel",
                grade: 2,
              },
              {
                title: "Géométrie",
                grade: 2,
              },
              {
                title: "Topologie",
                grade: 2,
              },
              {
                title: "Informatique",
                grade: 2,
              },
              {
                title: "Psychologie de l'enfant et de l'adolescent",
                grade: 2,
              },
              {
                title: "Analyse numérique",
                grade: 3,
              },
              {
                title: "Analyse complexe1",
                grade: 3,
              },
              {
                title: "Mesure et intégration 1",
                grade: 3,
              },
              {
                title: "Probabilités et statistiques 1",
                grade: 3,
              },
              {
                title: "Algèbre3",
                grade: 3,
              },
              {
                title: "Géométrie affine",
                grade: 3,
              },
              {
                title: "Logique mathématique",
                grade: 3,
              },
              {
                title: "Psychopédagogie",
                grade: 3,
              },
              {
                title: "Probabilités et statistiques 2",
                grade: 4,
              },
              {
                title: "Équations différentielles",
                grade: 4,
              },
              {
                title: "Didactique de mathématique",
                grade: 4,
              },
              {
                title: "Analyse complexe",
                grade: 4,
              },
              {
                title: "Législation scolaire",
                grade: 4,
              },
            ],
          },
        },
        {
          name: "Physique",
          grades: 4,
          courses: {
            create: [
              {
                title: "Algèbre1",
                grade: 1,
              },
              {
                title: "Analyse1",
                grade: 1,
              },
              {
                title: "Base de la mécanique",
                grade: 1,
              },
              {
                title: "Eléctricité et magnétisme",
                grade: 1,
              },
              {
                title: "Structure de la matière",
                grade: 1,
              },
              {
                title: "Thermodynamique chimique",
                grade: 1,
              },
              {
                title: "Introduction au sciences de l'éducation ",
                grade: 1,
              },
              {
                title: "Histoire des sciences",
                grade: 1,
              },
              {
                title: "Ondes et vibrations",
                grade: 2,
              },
              {
                title: "Optique",
                grade: 2,
              },
              {
                title: "Electronique",
                grade: 2,
              },
              {
                title: "Chimie minérale et des équilibres chimiques",
                grade: 2,
              },
              {
                title: "Cinétique chimique et électrochimique",
                grade: 2,
              },
              {
                title: "Informatique et technologie",
                grade: 2,
              },
              {
                title: "Science de l'enfant et de l'adolescence",
                grade: 2,
              },
              {
                title: "Méthodes mathématiques1",
                grade: 2,
              },
              {
                title: "Physique moderne",
                grade: 3,
              },
              {
                title:
                  "Thermodynamique et caractéristique physiques de la matière",
                grade: 3,
              },
              {
                title: "Didactique de la physique1",
                grade: 3,
              },
              {
                title: "Didactique de la chimie",
                grade: 3,
              },
              {
                title: "Chimie organique",
                grade: 3,
              },
              {
                title: "Chimie analytique",
                grade: 3,
              },
              {
                title: "Mesure et technologie",
                grade: 3,
              },
              {
                title: "Science de l'éducation",
                grade: 3,
              },
              {
                title: "Technologie moderne de l'Informatique",
                grade: 4,
              },
              {
                title: "Didactique de la physique 2",
                grade: 4,
              },
              {
                title: "Principe de l'astronomie",
                grade: 4,
              },
              {
                title: "Industrie chimique et environnement",
                grade: 4,
              },
              {
                title: "Législation scolaire",
                grade: 4,
              },
            ],
          },
        },
      ],
    },
  },

  {
    name: "Langues étrangères",
    topics: {
      create: [
        {
          name: "Anglais",
          grades: 5,
          courses: {
            create: [
              {
                title: "Oral expression",
                grade: 1,
              },
              {
                title: "Written expression",
                grade: 1,
              },
              {
                title: "Computing(TIC)",
                grade: 1,
              },
              {
                title: "Linguistics",
                grade: 1,
              },
              {
                title: "Phonetics",
                grade: 1,
              },
              {
                title: "introduction to Civilization",
                grade: 1,
              },
              {
                title: "French",
                grade: 1,
              },
              {
                title: "Reading techniques",
                grade: 1,
              },
              {
                title: "Grammar",
                grade: 1,
              },
              {
                title: "Written expression ",
                grade: 2,
              },
              {
                title: "Computing",
                grade: 2,
              },
              {
                title: "Oral expression",
                grade: 2,
              },
              {
                title: "Reading techniques",
                grade: 2,
              },
              {
                title: "Civilization Am/Brit",
                grade: 2,
              },
              {
                title: "Linguistics",
                grade: 2,
              },
              {
                title: "Phonetics",
                grade: 2,
              },
              {
                title: "French",
                grade: 2,
              },
              {
                title: "Grammar",
                grade: 2,
              },
              {
                title: "Sociolinguistics",
                grade: 3,
              },
              {
                title: "Brit&Am Civilization",
                grade: 3,
              },
              {
                title: "Oral expression & Phonetics",
                grade: 3,
              },
              {
                title: "Brit&Am literature",
                grade: 3,
              },
              {
                title: "Pedagogical trends and educational",
                grade: 3,
              },
              {
                title: "Introduction to psychology",
                grade: 3,
              },
              {
                title: "Didactics",
                grade: 3,
              },
              {
                title: "Information Technology",
                grade: 3,
              },
              {
                title: "Grammar and written expression",
                grade: 3,
              },
              {
                title: "Brit&Am literature",
                grade: 4,
              },
              {
                title: "Brit&Am Civilization",
                grade: 4,
              },
              {
                title: "Applied Linguistics",
                grade: 4,
              },
              {
                title: "Didactics",
                grade: 4,
              },
              {
                title: "Educational psychology",
                grade: 4,
              },
              {
                title: "Material design & development",
                grade: 4,
              },
              {
                title: "Textbook evaluation",
                grade: 4,
              },
              {
                title: "Research Methodologies",
                grade: 4,
              },
              {
                title: "Literature Am/Brit",
                grade: 5,
              },
              {
                title: "Applied linguistuics",
                grade: 5,
              },
              {
                title: "Cultural issues",
                grade: 5,
              },
              {
                title: "Pedagogical trends",
                grade: 5,
              },
              {
                title: "Civilization Am/Brit",
                grade: 5,
              },
              {
                title: "Syllables design",
                grade: 5,
              },
              {
                title: "African civ/lit",
                grade: 5,
              },
              {
                title: "School legislation",
                grade: 5,
              },
            ],
          },
        },
        {
          name: " Français ",
          grades: 5,
          courses: {
            create: [
              {
                title: "Pratique et technique de l'écrit",
                grade: 1,
              },
              {
                title: "Langue étrangère",
                grade: 1,
              },
              {
                title: "Approches textuelles",
                grade: 1,
              },
              {
                title: "Pratique systématique de la langue",
                grade: 1,
              },
              {
                title: "Initiation à la linguistique ",
                grade: 1,
              },
              {
                title: "Littérature",
                grade: 1,
              },
              {
                title: "TICE1",
                grade: 1,
              },
              {
                title: "Atelier d'activité graphique",
                grade: 1,
              },
              {
                title: "Pratique et technique de l'écrit 2",
                grade: 2,
              },
              {
                title: "Phonétique /Phonologie",
                grade: 2,
              },
              {
                title: "Sociolinguistique",
                grade: 2,
              },
              {
                title: "Psychologie de l'enfant",
                grade: 2,
              },
              {
                title: "TICE2",
                grade: 2,
              },
              {
                title: "Didactique1",
                grade: 2,
              },
              {
                title: "Pratique systématique de la langue 2",
                grade: 2,
              },
              {
                title: "PTO2",
                grade: 2,
              },
              {
                title: "Littérature2",
                grade: 2,
              },
              {
                title: "Langue étrangère",
                grade: 2,
              },
              {
                title: "Approches textuelles",
                grade: 2,
              },
              {
                title: "Syntaxe",
                grade: 3,
              },
              {
                title: "linguistique appliquée",
                grade: 3,
              },
              {
                title: "Littérature3",
                grade: 3,
              },
              {
                title: "PTEO",
                grade: 3,
              },
              {
                title: "Sciences de l'éducation",
                grade: 3,
              },
              {
                title: "Didactique2",
                grade: 3,
              },
              {
                title: "Sémiologie",
                grade: 3,
              },
              {
                title: "Langue étrangère",
                grade: 3,
              },
              {
                title: "Lexico-sémantique",
                grade: 3,
              },
              {
                title: "Littérature de jeunesse",
                grade: 4,
              },
              {
                title: "Outils et techniques de gestion",
                grade: 4,
              },
              {
                title: "Méthodologie",
                grade: 4,
              },
              {
                title: "Littérature d'expression française",
                grade: 4,
              },
              {
                title: "Analyse des Pratiques professionnelles",
                grade: 4,
              },
              {
                title: "Psycholinguistique",
                grade: 4,
              },
              {
                title: "DTL",
                grade: 4,
              },
              {
                title: "Linguistique de l'énonciation",
                grade: 4,
              },
              {
                title: "Didactique",
                grade: 5,
              },
              {
                title: "Psychopédagogie",
                grade: 5,
              },
              {
                title: "Systèmes grammaticaux",
                grade: 5,
              },
              {
                title: "Etude des programmes",
                grade: 5,
              },
              {
                title: "Outils et techniques de gestion",
                grade: 5,
              },
              {
                title: "Littérature française 4",
                grade: 5,
              },
              {
                title: "Analyse des Pratiques professionnelles",
                grade: 5,
              },
              {
                title: "Lecture critique",
                grade: 5,
              },
              {
                title: "Législation scolaire",
                grade: 5,
              },
            ],
          },
        },
      ],
    },
  },

  {
    name: "Arabe",
    topics: {
      create: [
        {
          name: "Arabe",
          grades: 3,
          courses: {
            create: [
              {
                title: "علوم التربية",
                grade: 1,
              },
              {
                title: "تاريخ",
                grade: 1,
              },
              {
                title: "علم النبات",
                grade: 1,
              },
              {
                title: "فيزياء",
                grade: 1,
              },
              {
                title: "1 رياضيات",
                grade: 1,
              },
              {
                title: "ادب",
                grade: 1,
              },
              {
                title: "لسانيات",
                grade: 1,
              },
              {
                title: "نحو و صرف",
                grade: 1,
              },
              {
                title: "لغة اجنبية",
                grade: 1,
              },
              {
                title: "علم نفس الطفل",
                grade: 2,
              },
              {
                title: "جغرافيا",
                grade: 2,
              },
              {
                title: "تكنولوجيا الاعلام و الاتصال",
                grade: 2,
              },
              {
                title: "فنون",
                grade: 2,
              },
              {
                title: "نقد",
                grade: 2,
              },
              {
                title: "عروض/بلاغة",
                grade: 2,
              },
              {
                title: "تربية مدنية/تربية دينية",
                grade: 2,
              },
              {
                title: "رياضيات2 ",
                grade: 2,
              },
              {
                title: "كيمياء",
                grade: 2,
              },
              {
                title: "علم الحيوان",
                grade: 2,
              },
              {
                title: "نحو و صرف و املاء",
                grade: 3,
              },
              {
                title: "تعليمية القواعد و الاملاء",
                grade: 3,
              },
              {
                title: "نصوص و تعليمية النصوص",
                grade: 3,
              },
              {
                title: "علم النفس التربوي",
                grade: 3,
              },
              {
                title: "تعليمية الرياضيات",
                grade: 3,
              },
              {
                title: "جيولوجيا",
                grade: 3,
              },
            ],
          },
        },
      ],
    },
  },
];

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();

  departments.forEach(async (d, i) => {
    await prisma.department.create({
      data: {
        name: d.name,
        topics: {
          create: d.topics.create.map((t) => ({
            name: t.name,
            grades: t.grades,
            courses: {
              create: t.courses.create.map((c) => ({
                title: c.title,
                grade: c.grade,
                published: false,
              })),
            },
          })),
        },
      },
    });
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
