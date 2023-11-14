export type Project = {
    id: number;
    name: string;
    description: string,
    technologies: Tech[],
}

export type Tech = {
    id:number,
    name: string
}

export const projects: Project[] = [
    {id: 1, name: "Project A", description: "This is project A", technologies:[]},
    {id: 2, name: "Project B", description: "This is project B",technologies:[]}
]