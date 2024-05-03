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
        <div className="skill-card">
          <h3 className="code-title">Code</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript ES6</li>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>RESTful API</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3 className="toolbox-title">Toolbox</h3>
          <ul>
            <li>Postman</li>
            <li>Tailwind CSS</li>
            <li>GitHub</li>
            <li>VS Code</li>
            <li>Figma</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3 className="more-title">More</h3>
          <ul>
            <li>Agile Methodology</li>
            <li>Mob Programming</li>
            <li>Responsive Design</li>
            <li>Version Control</li>
            <li>Web Accessibility</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3 className="upcoming-title">Upcoming</h3>
          <ul>
            <li>MongoDB</li>
            <li>Python</li>
          </ul>
        </div>
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
