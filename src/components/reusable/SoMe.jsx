import "./SoMe.css"

import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import "./SoMe.css"

export const SoMe = () => {
  return (
    <div className="contact-icons">
      <a
        href="https://www.linkedin.com/in/almaherrstrom/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="link to my linkedin">
        <FaLinkedinIn />
      </a>
      <a
        href="https://github.com/almaherris"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="link to my github">
        <FaGithub />
      </a>
    </div>
  )
}
