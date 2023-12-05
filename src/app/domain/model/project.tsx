export type Project = {
    id: number;
    name: string;
    description: string,
    technologies: Tech[],
    text: string,
    links: Link[]
}

export type Link = {
    id: number,
    type: LinkTypes,
    href: string
}

export enum LinkTypes {
    GITHUB = 'Github',
    SITE = 'Site',
    G_PLAY = 'GooglePlay',
}

export type Tech = {
    id: number,
    name: string
}

export const projects: Project[] = [
    {
        id: 1,
        name: "MyDailyPet",
        description: "App routine for tutor and pet aligns. App was developed in Kotlin, Android",
        technologies: [{ id: 1, name: "Android" }, { id: 2, name: "Kotlin" }],
        text: `
📆 My pet routine was thought through my need to be able to organize my pet's important things in one place.
With the app you can create reminders, add tasks and your pet's data. With this you have information that may be necessary for the day-to-day with your pet. My Daily Pet came to make your day-to-day life easier.
The app is available on the Google Play Store.
\n
The application was developed from the good practices indicated by google and through the knowledge acquired by me so far. These were some of the technologies, architectures and standards used:
\n
        `,
        links: [
            {
                id: 1,
                type: LinkTypes.GITHUB,
                href: "https://github.com/joaovq/MyDailyPet"
            },
            {
                id: 2,
                type: LinkTypes.G_PLAY,
                href: "https://play.google.com/store/apps/details?id=br.com.joaovq.mydailypet"
            }
        ]
    },
    {
        id: 2,
        name: "My Products Firebase Firestore App",
        description: "Demo for Firebase Firestore using Data Binding,\n Navigation, Architecture MVVM, Glide and Preferences API",
        technologies: [
            { id: 1, name: "Android" },
            { id: 2, name: "Kotlin" },
            { id: 3, name: "SQLite" },
            { id: 4, name: "Storage" },
        ],
        text: "",
        links: []
    },
    {
        id: 3,
        name: "Happy Places App",
        description: "Application for storing photos and finding places with good memories. Application developed on Android (Kotlin).",
        technologies: [
            { id: 1, name: "Android" },
            { id: 2, name: "Kotlin" },
            { id: 3, name: "SQLite" },
            { id: 4, name: "Storage" },
        ],
        text: "",
        links: [
            {
                id: 1,
                type: LinkTypes.GITHUB,
                href: "https://github.com/joaovq/HappyPlacesApp"
            },
        ]
    }
]

export const webProjects: Project[] = [
    {
        id: 4,
        name: "Customer management",
        description: "Application for management of customers, with services needed for good CRM.",
        technologies: [
            { id: 1, name: "Java" },
            { id: 2, name: "Spring" },
            { id: 3, name: "MySQL" },
            { id: 4, name: "H2Database" },
            { id: 4, name: "Render Cloud" },
        ],
        text: "",
        links: [
            {
                id: 1,
                type: LinkTypes.GITHUB,
                href: "https://github.com/joaovq/MyDailyPet"
            },
        ]
    },
    {
        id: 5,
        name: "File upload Service",
        description: "Application for management files uploaded by user. Service was developed with Java and Spring Framework.",
        technologies: [
            { id: 1, name: "Java" },
            { id: 2, name: "Spring" },
            { id: 3, name: "MySQL" },
            { id: 4, name: "H2Database" },
            { id: 4, name: "Render Cloud" },
        ],
        text: "",
        links: []
    },
    {
        id: 6,
        name: "Payment system Service",
        description: "Application to translate and read transactions in the CNAB.txt file and save in the Database. The service was developed with Java, Spring Framework, Spring Batch.",
        technologies: [
            { id: 1, name: "Java" },
            { id: 2, name: "Spring" },
            { id: 3, name: "MySQL" },
            { id: 4, name: "H2Database" },
            { id: 4, name: "Render Cloud" },
        ],
        text: "",
        links: [
            {
                id: 1,
                type: LinkTypes.GITHUB,
                href: "https://github.com/joaovq/MyDailyPet"
            },
        ]
    }
]

export const allProjects = [...projects, ...webProjects]