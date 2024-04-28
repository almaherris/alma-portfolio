import projects from "../../json/projects.json"
import { IoGlobeOutline } from "react-icons/io5"
import { FaGithub } from "react-icons/fa"
import { Tags } from "./Tags"
import { Button } from "./Buttons"

export const ProjectCard = () => {
  return (
    <div className="project-card">
      {projects.projects.map(
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
                    text="Live demo"
                  />
                  <Button
                    url={github_url}
                    className="link-button-github"
                    icon={<FaGithub className="button-icon-project" />}
                    text="View the code"
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
