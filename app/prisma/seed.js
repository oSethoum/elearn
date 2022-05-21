"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const departments = [
    {
        name: "Sciences exactes",
        topics: {
            create: [
                {
                    name: "Informatique",
                    years: 5,
                    courses: {
                        create: [
                            {
                                title: "Analyse",
                                year: 1,
                            },
                            {
                                title: "Algèbre",
                                year: 1,
                            },
                            {
                                title: "Electricité et Electronique",
                                year: 1,
                            },
                            {
                                title: "Architecture des ordinateurs 1",
                                year: 1,
                            },
                            {
                                title: "Algorithmique 1",
                                year: 1,
                            },
                            {
                                title: "Probabilités et statistiques",
                                year: 1,
                            },
                            {
                                title: "Calcul formel et Logique mathématique",
                                year: 1,
                            },
                            {
                                title: "Histoire des sciences",
                                year: 1,
                            },
                            {
                                title: "Français",
                                year: 1,
                            },
                            {
                                title: "Introduction aux sciences de l'éducation",
                                year: 1,
                            },
                            {
                                title: "Analyse numérique",
                                year: 2,
                            },
                            {
                                title: "Algorithmique 2",
                                year: 2,
                            },
                            {
                                title: "Systèmes d'Information 1",
                                year: 2,
                            },
                            {
                                title: "Architecture des ordinateurs 2",
                                year: 2,
                            },
                            {
                                title: "Système d'expoilation 1",
                                year: 2,
                            },
                            {
                                title: "Théorie des langages",
                                year: 2,
                            },
                            {
                                title: "Traitement du signal",
                                year: 2,
                            },
                            {
                                title: "Psychologie de l'enfant et de l'adolescent",
                                year: 2,
                            },
                            {
                                title: "Anglais 1",
                                year: 2,
                            },
                            {
                                title: "Systèmes d'Information 2",
                                year: 3,
                            },
                            {
                                title: "Réseaux 1",
                                year: 3,
                            },
                            {
                                title: "Compilation",
                                year: 3,
                            },
                            {
                                title: "Système d'expoilation 2",
                                year: 3,
                            },
                            {
                                title: "Recherche opérationnelle",
                                year: 3,
                            },
                            {
                                title: "Intelligence artificielle",
                                year: 3,
                            },
                            {
                                title: "Technologie web 1",
                                year: 3,
                            },
                            {
                                title: "Anglais2",
                                year: 3,
                            },
                            {
                                title: "Psychologie",
                                year: 3,
                            },
                            {
                                title: "Technologie web 2",
                                year: 4,
                            },
                            {
                                title: "Réseaux 2",
                                year: 4,
                            },
                            {
                                title: "Programmation objet",
                                year: 4,
                            },
                            {
                                title: "Génie logiciel",
                                year: 4,
                            },
                            {
                                title: "Système expert",
                                year: 4,
                            },
                            {
                                title: "Base de données avancées",
                                year: 4,
                            },
                            {
                                title: "Didactique",
                                year: 4,
                            },
                            {
                                title: "Curricula et évaluation éducative",
                                year: 4,
                            },
                            {
                                title: "Techniques avancées en Informatique",
                                year: 5,
                            },
                            {
                                title: "Sécurité informatique",
                                year: 5,
                            },
                            {
                                title: "Conduite de projet",
                                year: 5,
                            },
                            {
                                title: "Vérification formelle",
                                year: 5,
                            },
                            {
                                title: "Législation scolaire",
                                year: 5,
                            },
                        ],
                    },
                },
                {
                    name: "Mathématiques",
                    years: 4,
                    courses: {
                        create: [
                            {
                                title: "Algèbre1",
                                year: 1,
                            },
                            {
                                title: "Analyse1",
                                year: 1,
                            },
                            {
                                title: "Base de la mécanique",
                                year: 1,
                            },
                            {
                                title: "Eléctricité et magnétisme",
                                year: 1,
                            },
                            {
                                title: "Structure de la matière",
                                year: 1,
                            },
                            {
                                title: "Thermodynamique chimique",
                                year: 1,
                            },
                            {
                                title: "Introduction au sciences de l'éducation ",
                                year: 1,
                            },
                            {
                                title: "Histoire des sciences",
                                year: 1,
                            },
                            {
                                title: "Algèbre générale",
                                year: 2,
                            },
                            {
                                title: "Algèbre Linéaire",
                                year: 2,
                            },
                            {
                                title: "Analyse 2",
                                year: 2,
                            },
                            {
                                title: "Calcul différentiel",
                                year: 2,
                            },
                            {
                                title: "Géométrie",
                                year: 2,
                            },
                            {
                                title: "Topologie",
                                year: 2,
                            },
                            {
                                title: "Informatique",
                                year: 2,
                            },
                            {
                                title: "Psychologie de l'enfant et de l'adolescent",
                                year: 2,
                            },
                            {
                                title: "Analyse numérique",
                                year: 3,
                            },
                            {
                                title: "Analyse complexe1",
                                year: 3,
                            },
                            {
                                title: "Mesure et intégration 1",
                                year: 3,
                            },
                            {
                                title: "Probabilités et statistiques 1",
                                year: 3,
                            },
                            {
                                title: "Algèbre3",
                                year: 3,
                            },
                            {
                                title: "Géométrie affine",
                                year: 3,
                            },
                            {
                                title: "Logique mathématique",
                                year: 3,
                            },
                            {
                                title: "Psychopédagogie",
                                year: 3,
                            },
                            {
                                title: "Probabilités et statistiques 2",
                                year: 4,
                            },
                            {
                                title: "Équations différentielles",
                                year: 4,
                            },
                            {
                                title: "Didactique de mathématique",
                                year: 4,
                            },
                            {
                                title: "Analyse complexe",
                                year: 4,
                            },
                            {
                                title: "Législation scolaire",
                                year: 4,
                            },
                        ],
                    },
                },
                {
                    name: "Physique",
                    years: 4,
                    courses: {
                        create: [
                            {
                                title: "Algèbre1",
                                year: 1,
                            },
                            {
                                title: "Analyse1",
                                year: 1,
                            },
                            {
                                title: "Base de la mécanique",
                                year: 1,
                            },
                            {
                                title: "Eléctricité et magnétisme",
                                year: 1,
                            },
                            {
                                title: "Structure de la matière",
                                year: 1,
                            },
                            {
                                title: "Thermodynamique chimique",
                                year: 1,
                            },
                            {
                                title: "Introduction au sciences de l'éducation ",
                                year: 1,
                            },
                            {
                                title: "Histoire des sciences",
                                year: 1,
                            },
                            {
                                title: "Ondes et vibrations",
                                year: 2,
                            },
                            {
                                title: "Optique",
                                year: 2,
                            },
                            {
                                title: "Electronique",
                                year: 2,
                            },
                            {
                                title: "Chimie minérale et des équilibres chimiques",
                                year: 2,
                            },
                            {
                                title: "Cinétique chimique et électrochimique",
                                year: 2,
                            },
                            {
                                title: "Informatique et technologie",
                                year: 2,
                            },
                            {
                                title: "Science de l'enfant et de l'adolescence",
                                year: 2,
                            },
                            {
                                title: "Méthodes mathématiques1",
                                year: 2,
                            },
                            {
                                title: "Physique moderne",
                                year: 3,
                            },
                            {
                                title: "Thermodynamique et caractéristique physiques de la matière",
                                year: 3,
                            },
                            {
                                title: "Didactique de la physique1",
                                year: 3,
                            },
                            {
                                title: "Didactique de la chimie",
                                year: 3,
                            },
                            {
                                title: "Chimie organique",
                                year: 3,
                            },
                            {
                                title: "Chimie analytique",
                                year: 3,
                            },
                            {
                                title: "Mesure et technologie",
                                year: 3,
                            },
                            {
                                title: "Science de l'éducation",
                                year: 3,
                            },
                            {
                                title: "Technologie moderne de l'Informatique",
                                year: 4,
                            },
                            {
                                title: "Didactique de la physique 2",
                                year: 4,
                            },
                            {
                                title: "Principe de l'astronomie",
                                year: 4,
                            },
                            {
                                title: "Industrie chimique et environnement",
                                year: 4,
                            },
                            {
                                title: "Législation scolaire",
                                year: 4,
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
                    years: 5,
                    courses: {
                        create: [
                            {
                                title: "Oral expression",
                                year: 1,
                            },
                            {
                                title: "Written expression",
                                year: 1,
                            },
                            {
                                title: "Computing(TIC)",
                                year: 1,
                            },
                            {
                                title: "Linguistics",
                                year: 1,
                            },
                            {
                                title: "Phonetics",
                                year: 1,
                            },
                            {
                                title: "introduction to Civilization",
                                year: 1,
                            },
                            {
                                title: "French",
                                year: 1,
                            },
                            {
                                title: "Reading techniques",
                                year: 1,
                            },
                            {
                                title: "Grammar",
                                year: 1,
                            },
                            {
                                title: "Written expression ",
                                year: 2,
                            },
                            {
                                title: "Computing",
                                year: 2,
                            },
                            {
                                title: "Oral expression",
                                year: 2,
                            },
                            {
                                title: "Reading techniques",
                                year: 2,
                            },
                            {
                                title: "Civilization Am/Brit",
                                year: 2,
                            },
                            {
                                title: "Linguistics",
                                year: 2,
                            },
                            {
                                title: "Phonetics",
                                year: 2,
                            },
                            {
                                title: "French",
                                year: 2,
                            },
                            {
                                title: "Grammar",
                                year: 2,
                            },
                            {
                                title: "Sociolinguistics",
                                year: 3,
                            },
                            {
                                title: "Brit&Am Civilization",
                                year: 3,
                            },
                            {
                                title: "Oral expression & Phonetics",
                                year: 3,
                            },
                            {
                                title: "Brit&Am literature",
                                year: 3,
                            },
                            {
                                title: "Pedagogical trends and educational",
                                year: 3,
                            },
                            {
                                title: "Introduction to psychology",
                                year: 3,
                            },
                            {
                                title: "Didactics",
                                year: 3,
                            },
                            {
                                title: "Information Technology",
                                year: 3,
                            },
                            {
                                title: "Grammar and written expression",
                                year: 3,
                            },
                            {
                                title: "Brit&Am literature",
                                year: 4,
                            },
                            {
                                title: "Brit&Am Civilization",
                                year: 4,
                            },
                            {
                                title: "Applied Linguistics",
                                year: 4,
                            },
                            {
                                title: "Didactics",
                                year: 4,
                            },
                            {
                                title: "Educational psychology",
                                year: 4,
                            },
                            {
                                title: "Material design & development",
                                year: 4,
                            },
                            {
                                title: "Textbook evaluation",
                                year: 4,
                            },
                            {
                                title: "Research Methodologies",
                                year: 4,
                            },
                            {
                                title: "Literature Am/Brit",
                                year: 5,
                            },
                            {
                                title: "Applied linguistuics",
                                year: 5,
                            },
                            {
                                title: "Cultural issues",
                                year: 5,
                            },
                            {
                                title: "Pedagogical trends",
                                year: 5,
                            },
                            {
                                title: "Civilization Am/Brit",
                                year: 5,
                            },
                            {
                                title: "Syllables design",
                                year: 5,
                            },
                            {
                                title: "African civ/lit",
                                year: 5,
                            },
                            {
                                title: "School legislation",
                                year: 5,
                            },
                        ],
                    },
                },
                {
                    name: " Français ",
                    years: 5,
                    courses: {
                        create: [
                            {
                                title: "Pratique et technique de l'écrit",
                                year: 1,
                            },
                            {
                                title: "Langue étrangère",
                                year: 1,
                            },
                            {
                                title: "Approches textuelles",
                                year: 1,
                            },
                            {
                                title: "Pratique systématique de la langue",
                                year: 1,
                            },
                            {
                                title: "Initiation à la linguistique ",
                                year: 1,
                            },
                            {
                                title: "Littérature",
                                year: 1,
                            },
                            {
                                title: "TICE1",
                                year: 1,
                            },
                            {
                                title: "Atelier d'activité graphique",
                                year: 1,
                            },
                            {
                                title: "Pratique et technique de l'écrit 2",
                                year: 2,
                            },
                            {
                                title: "Phonétique /Phonologie",
                                year: 2,
                            },
                            {
                                title: "Sociolinguistique",
                                year: 2,
                            },
                            {
                                title: "Psychologie de l'enfant",
                                year: 2,
                            },
                            {
                                title: "TICE2",
                                year: 2,
                            },
                            {
                                title: "Didactique1",
                                year: 2,
                            },
                            {
                                title: "Pratique systématique de la langue 2",
                                year: 2,
                            },
                            {
                                title: "PTO2",
                                year: 2,
                            },
                            {
                                title: "Littérature2",
                                year: 2,
                            },
                            {
                                title: "Langue étrangère",
                                year: 2,
                            },
                            {
                                title: "Approches textuelles",
                                year: 2,
                            },
                            {
                                title: "Syntaxe",
                                year: 3,
                            },
                            {
                                title: "linguistique appliquée",
                                year: 3,
                            },
                            {
                                title: "Littérature3",
                                year: 3,
                            },
                            {
                                title: "PTEO",
                                year: 3,
                            },
                            {
                                title: "Sciences de l'éducation",
                                year: 3,
                            },
                            {
                                title: "Didactique2",
                                year: 3,
                            },
                            {
                                title: "Sémiologie",
                                year: 3,
                            },
                            {
                                title: "Langue étrangère",
                                year: 3,
                            },
                            {
                                title: "Lexico-sémantique",
                                year: 3,
                            },
                            {
                                title: "Littérature de jeunesse",
                                year: 4,
                            },
                            {
                                title: "Outils et techniques de gestion",
                                year: 4,
                            },
                            {
                                title: "Méthodologie",
                                year: 4,
                            },
                            {
                                title: "Littérature d'expression française",
                                year: 4,
                            },
                            {
                                title: "Analyse des Pratiques professionnelles",
                                year: 4,
                            },
                            {
                                title: "Psycholinguistique",
                                year: 4,
                            },
                            {
                                title: "DTL",
                                year: 4,
                            },
                            {
                                title: "Linguistique de l'énonciation",
                                year: 4,
                            },
                            {
                                title: "Didactique",
                                year: 5,
                            },
                            {
                                title: "Psychopédagogie",
                                year: 5,
                            },
                            {
                                title: "Systèmes grammaticaux",
                                year: 5,
                            },
                            {
                                title: "Etude des programmes",
                                year: 5,
                            },
                            {
                                title: "Outils et techniques de gestion",
                                year: 5,
                            },
                            {
                                title: "Littérature française 4",
                                year: 5,
                            },
                            {
                                title: "Analyse des Pratiques professionnelles",
                                year: 5,
                            },
                            {
                                title: "Lecture critique",
                                year: 5,
                            },
                            {
                                title: "Législation scolaire",
                                year: 5,
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
                    years: 3,
                    courses: {
                        create: [
                            {
                                title: "علوم التربية",
                                year: 1,
                            },
                            {
                                title: "تاريخ",
                                year: 1,
                            },
                            {
                                title: "علم النبات",
                                year: 1,
                            },
                            {
                                title: "فيزياء",
                                year: 1,
                            },
                            {
                                title: "1 رياضيات",
                                year: 1,
                            },
                            {
                                title: "ادب",
                                year: 1,
                            },
                            {
                                title: "لسانيات",
                                year: 1,
                            },
                            {
                                title: "نحو و صرف",
                                year: 1,
                            },
                            {
                                title: "لغة اجنبية",
                                year: 1,
                            },
                            {
                                title: "علم نفس الطفل",
                                year: 2,
                            },
                            {
                                title: "جغرافيا",
                                year: 2,
                            },
                            {
                                title: "تكنولوجيا الاعلام و الاتصال",
                                year: 2,
                            },
                            {
                                title: "فنون",
                                year: 2,
                            },
                            {
                                title: "نقد",
                                year: 2,
                            },
                            {
                                title: "عروض/بلاغة",
                                year: 2,
                            },
                            {
                                title: "تربية مدنية/تربية دينية",
                                year: 2,
                            },
                            {
                                title: "رياضيات2 ",
                                year: 2,
                            },
                            {
                                title: "كيمياء",
                                year: 2,
                            },
                            {
                                title: "علم الحيوان",
                                year: 2,
                            },
                            {
                                title: "نحو و صرف و املاء",
                                year: 3,
                            },
                            {
                                title: "تعليمية القواعد و الاملاء",
                                year: 3,
                            },
                            {
                                title: "نصوص و تعليمية النصوص",
                                year: 3,
                            },
                            {
                                title: "علم النفس التربوي",
                                year: 3,
                            },
                            {
                                title: "تعليمية الرياضيات",
                                year: 3,
                            },
                            {
                                title: "جيولوجيا",
                                year: 3,
                            },
                        ],
                    },
                },
            ],
        },
    },
];
const prisma = new client_1.PrismaClient();
async function main() {
    await prisma.$connect();
    departments.forEach(async (d, i) => {
        await prisma.department.create({
            data: {
                name: d.name,
                topics: {
                    create: d.topics.create.map((t) => ({
                        name: t.name,
                        years: t.years,
                        courses: {
                            create: t.courses.create.map((c) => ({
                                title: c.title,
                                year: c.year,
                                published: false,
                            })),
                        },
                    })),
                },
            },
        });
    });
    await prisma.admin.create({
        data: {
            firstName: "admin",
            lastName: "admin",
            user: {
                create: {
                    username: "admin",
                    password: "admin",
                    email: "admin@gmail.com",
                    role: "admin",
                    disabled: false,
                },
            },
        },
    });
    await prisma.teacher.create({
        data: {
            firstName: "teacher",
            lastName: "teacher",
            user: {
                create: {
                    username: "teacher",
                    password: "teacher",
                    email: "teacher@gmail.com",
                    role: "teacher",
                    disabled: false,
                },
            },
        },
    });
    await prisma.student.create({
        data: {
            year: 1,
            topic: {
                connect: {
                    id: 1,
                },
            },
            firstName: "student",
            lastName: "student",
            user: {
                create: {
                    username: "student",
                    password: "student",
                    email: "student@gmail.com",
                    role: "student",
                    disabled: false,
                },
            },
        },
    });
}
main()
    .catch((e) => console.error(e))
    .finally(async () => {
    await prisma.$disconnect();
});
