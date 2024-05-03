import { FaArrowUp } from "react-icons/fa"
import { SoMe } from "../reusable/SoMe"
import { useLanguageData } from "../../hooks/useLanguageData"
import "./Contact.css"

export const Contact = () => {
  const scrollToIntro = () => {
    const projectSection = document.getElementById("intro")
    projectSection.scrollIntoView({ behavior: "smooth" })
  }

  const data = useLanguageData()

  return (
    <div className="contact" id="contact">
      <h2 className="title">{data.contact.title}</h2>
      <div className="contact-text">
        <div className="contact-email">
          <p>Alma Herrström</p>
          <p>almaherrstrom@hotmail.com</p>
        </div>
        <div className="contact-place">
          <p>{data.contact.location1}</p>
          <p>{data.contact.location2}</p>
        </div>
      </div>
      <div className="some-contact">
        <SoMe />
      </div>
      <div className="up-btn-container">
        <button
          aria-label="jump back up to intro section"
          className="up-button"
          onClick={scrollToIntro}>
          <FaArrowUp />
        </button>
      </div>
    </div>
  )
}
