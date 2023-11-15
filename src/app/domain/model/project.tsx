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
        technologies: [{ id: 1, name: "Android" }]
    },
    { id: 2, name: "Project B", description: "This is project B", technologies: [] }
]