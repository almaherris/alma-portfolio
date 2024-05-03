import { IoArrowDown } from "react-icons/io5"
import { SoMe } from "../reusable/SoMe"
import { useLanguageData } from "../../hooks/useLanguageData"
import "./Intro.css"

export const Intro = () => {
  const scrollToProjectSection = () => {
    const projectSection = document.getElementById("projects")
    projectSection.scrollIntoView({ behavior: "smooth" })
  }

  const data = useLanguageData()

  return (
    <div className="intro" id="intro">
      <div className="mobile-profpic">
        <img src="/profilepic-S.png" alt="profile picture for mobile" />
      </div>
      <div className="desktop-parent">
        <div className="section desktop-left">
          <div className="intro-text-container">
            <h1 className="headline">{data.intro.headline}</h1>
            <p className="intro-text">{data.intro.text}</p>
          </div>

          <a className="intro-link" onClick={scrollToProjectSection}>
            {data.intro.linkText} <IoArrowDown className="intro-icon" />
          </a>
        </div>
        <div className="section desktop-middle">
          <img
            className="profilepic-L"
            src="/profilepic-L.JPG"
            alt="profile picture for desktop"
          />
          <div className="img-text-div">
            <p className="img-text">Alma Herrström</p>
            <p className="img-text">{data.intro.location}</p>
            <div className="some-intro">
              <SoMe />
            </div>
          </div>
        </div>
        <div className="section desktop-right" />
      </div>
    </div>
  )
}
