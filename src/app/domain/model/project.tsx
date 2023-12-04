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
        name: "🐶 MyDailyPet",
        description: "App routine for tutor and pet aligns",
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
                id: 1,
                type: LinkTypes.G_PLAY,
                href: "https://github.com/joaovq/MyDailyPet"
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
    }
]

export const webProjects: Project[] = [
    {
        id: 3,
        name: "🐶 MyDailyPet",
        description: "App routine for tutor and pet aligns",
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
                id: 1,
                type: LinkTypes.G_PLAY,
                href: "https://github.com/joaovq/MyDailyPet"
            }
        ]
    },
    {
        id: 4,
        name: "MyProdusctsFirebaseFirestore App",
        description: "Demo for Firebase Firestore using Data Binding,\n Navigation, Architecture MVVM, Glide and Preferences API",
        technologies: [
            { id: 1, name: "Android" },
            { id: 2, name: "Kotlin" },
            { id: 3, name: "SQLite" },
            { id: 4, name: "Storage" },
        ],
        text: "",
        links: []
    }
]