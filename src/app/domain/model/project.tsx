export type Project = {
    id: number;
    name: string;
    description: string,
    technologies: Tech[],
}

export type Tech = {
    id: number,
    name: string
}

export const projects: Project[] = [
    {
        id: 1,
        name: "MyDailyPet",
        description: "App routine for tutor and pet aligns",
        technologies: [{ id: 1, name: "Android" }, { id: 2, name: "Kotlin" }]
    },
    {
        id: 2,
        name: "HappyPlaces App",
        description: "App for user add your happy places",
        technologies: [
            { id: 1, name: "Android" },
            { id: 2, name: "Kotlin" },
            { id: 3, name: "SQLite" },
            { id: 4, name: "Storage" },
        ]
    }
]