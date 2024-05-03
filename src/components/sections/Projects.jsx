import { ProjectCard } from "../reusable/ProjectCard"
import { useLanguageData } from "../../hooks/useLanguageData"

export const Projects = () => {
  const data = useLanguageData()

  return (
    <div className="projects" id="projects">
      <h2 className="title">{data.projects.title}</h2>
      <ProjectCard />
    </div>
  )
}
