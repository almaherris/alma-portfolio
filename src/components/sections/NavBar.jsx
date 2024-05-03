import { useState } from "react"
import { RiCloseLine, RiMenuLine } from "react-icons/ri"
import { useLanguageData } from "../../hooks/useLanguageData"
import "./NavBar.css"

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const closeMenu = () => {
    setShowMenu(false)
  }

  const data = useLanguageData()

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
              {data.navbar.tech}
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              {data.navbar.projects}
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>
              {data.navbar.skills}
            </a>
          </li>
          <li>
            <a href="#feedback" onClick={closeMenu}>
              {data.navbar.feedback}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              {data.navbar.contact}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
