import { useLanguageData } from "../../hooks/useLanguageData"
import "./Tech.css"

export const Tech = () => {
  const data = useLanguageData()

  return (
    <div className="tech" id="tech">
      <h2 className="title">{data.tech.title}</h2>
      <p className="tech-p">
        HTML, CSS, JavaScript, JSX, ReactJS, React Hooks, ExpressJS, NodeJS,
        MongoDB, Postman, VSCode, RESTful APIs, GitHub, Figma, Tailwind, Styled
        Components
      </p>
    </div>
  )
}
