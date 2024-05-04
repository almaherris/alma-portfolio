import { useLanguageData } from "../../hooks/useLanguageData"
import "./Skills.css"
import myCV from "../../assets/AlmaHerrstrom_CV.pdf"

export const Skills = () => {
  const downloadPdf = () => {
    window.open(myCV)
  }

  const data = useLanguageData()

  return (
    <div className="skills" id="skills">
      <h2 className="title">{data.skills.title}</h2>
      <div className="skill-container">
        {data.skills.categories.map((category, index) => (
          <div className="skill-card" key={index}>
            <h3
              className={
                [
                  "code-title",
                  "toolbox-title",
                  "other-title",
                  "upcoming-title",
                ][index]
              }>
              {category.title}
            </h3>
            <ul>
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="button-div">
        <button
          id="download-button"
          onClick={downloadPdf}
          className="download-button"
          value="download">
          {data.skills.cta}
        </button>
      </div>
    </div>
  )
}
