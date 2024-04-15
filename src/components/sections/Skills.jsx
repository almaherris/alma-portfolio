import "./Skills.css"
import myCV from "../../assets/my-cv.pdf"

export const Skills = () => {
  const downloadPdf = () => {
    window.open(myCV)
    console.log("download logic goes here")
  }

  return (
    <div className="skills" id="skills">
      <h2 className="title">Skills</h2>
      <div className="skill-container">
        <div className="skill-card">
          <h3 className="code-title">Code</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript ES6</li>
            <li>ReactJS</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3 className="toolbox-title">Toolbox</h3>
          <ul>
            <li>Postman</li>
            <li>Figma</li>
            <li>Styled Components</li>
            <li>RESTful API</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3 className="upcoming-title">Upcoming</h3>
          <ul>
            <li>NodeJS</li>
            <li>MongoDB</li>
            <li>Express</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3 className="more-title">More</h3>
          <ul>
            <li>Agile Methodology</li>
            <li>Pair Programming</li>
            <li>Responsive Design</li>
            <li>Web Accessibility</li>
          </ul>
        </div>
      </div>
      <div className="button-div">
        <button
          id="download-button"
          onClick={downloadPdf}
          className="download-button"
          value="download">
          Download CV
        </button>
      </div>
    </div>
  )
}
