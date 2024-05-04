import projectsEn from "../../json/projects/projects.en.json"
import { IoGlobeOutline } from "react-icons/io5"
import { FaGithub } from "react-icons/fa"
import { Tags } from "./Tags"
import { Button } from "./Buttons"
import { useLanguageData } from "../../hooks/useLanguageData"
import "./ProjectCard.css"

export const ProjectCard = () => {
  const data = useLanguageData()

  return (
    <div className="project-card">
      {projectsEn.projects.map(
        ({ id, name, description, tags, image, netlify_url, github_url }) => {
          return (
            <div className="project-item" key={id}>
              <div className="project-img">
                <img
                  src={image}
                  alt={`image for project ${name}`}
                  className="project-photo"
                />
              </div>
              <div className="project-data">
                <h3 className="project-name">{name}</h3>
                <p className="project-summary">{description}</p>
                <Tags tags={tags} />

                <div className="project-buttons">
                  <Button
                    url={netlify_url}
                    className="link-button-netlify"
                    icon={<IoGlobeOutline className="button-icon-project" />}
                    text={data.projects.netlifyBtn}
                  />
                  <Button
                    url={github_url}
                    className="link-button-github"
                    icon={<FaGithub className="button-icon-project" />}
                    text={data.projects.githubBtn}
                  />
                </div>
              </div>
            </div>
          )
        }
      )}
    </div>
  )
}
