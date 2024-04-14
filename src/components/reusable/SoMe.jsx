import {
  FaLinkedinIn,
  FaGithub,
  FaStackOverflow,
  FaInstagram,
} from "react-icons/fa"
import "./SoMe.css"

export const Contact = () => {
  return (
    <div className="contact-icons">
      <a
        href="https://www.linkedin.com/in/alma-herrstr%C3%B6m-85a840111/"
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

      <a
        href="https://stackoverflow.com/users/22531351/almahe"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="link to my stackoverflow">
        <FaStackOverflow />
      </a>

      <a
        href="https://www.instagram.com/almaherrstrom/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="link to my instagram">
        <FaInstagram />
      </a>
    </div>
  )
}
