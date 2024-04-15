import { SoMe } from "../reusable/SoMe"
import "./Contact.css"

export const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2 className="title">Contact</h2>
      <div className="contact-text">
        <div className="contact-email">
          <p>Alma Herrström</p>
          <p>almaherrstrom@hotmail.com</p>
        </div>
        <div className="contact-place">
          <p>Based in Stockholm</p>
          <p>Available worldwide</p>
        </div>
      </div>

      <div className="some-icons">
        <SoMe />
      </div>
    </div>
  )
}
