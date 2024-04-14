import { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import "./NavBar.css"

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar">
      <RxHamburgerMenu className="hamburger-icon" onClick={toggleMenu} />
      <p className="navbar-title">Alma Herrström</p>
      <ul className={isOpen ? "menu active" : "menu"}>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  )
}
