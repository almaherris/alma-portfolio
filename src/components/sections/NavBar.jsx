import { useState } from "react"
import { RiCloseLine, RiMenuLine } from "react-icons/ri"
import "./NavBar.css"

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const closeMenu = () => {
    setShowMenu(false)
  }

  return (
    <nav className="navbar">
      {/* Hamburger menu icon for mobile */}
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        {showMenu ? <RiCloseLine /> : <RiMenuLine />}
      </div>

      {/* Navbar title */}
      <p className="navbar-title">Alma Herrström</p>

      {/* Hidden dropdown menu */}
      <div className={`dropdown-menu ${showMenu ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#tech" onClick={closeMenu}>
              Tech
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#feedback" onClick={closeMenu}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
