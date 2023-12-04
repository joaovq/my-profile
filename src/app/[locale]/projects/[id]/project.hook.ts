import { Project, projects } from "@/app/domain/model/project"
import { useEffect, useState } from "react"

export const useProject = (id: number) => {
    const [project, setProject] = useState<Project>()
    const [otherProjects, setOtherProjects] = useState<Project[]>([])

    useEffect(() => {
        const projectFound = projects.find(project => project.id == id)
        setProject(projectFound)
        let tmpProjects = getRandomProjects(project)
        setOtherProjects(Array.from(tmpProjects))
      }, [id, project])
    return {project, otherProjects}
}

function getRandomProjects(project: Project | undefined) {
    let tmpProjects = new Set<Project>()
    for (let index = 0; index < 3; index++) {
        let randInt = Math.floor(Math.random() * projects.length)
        if (projects[randInt] == project) {
            continue
        }
        tmpProjects.add(projects[randInt])
    }
    return tmpProjects
}
