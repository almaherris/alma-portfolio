import { IoArrowDown } from "react-icons/io5"
import "./Intro.css"

export const Intro = () => {
  const scrollToProjectSection = () => {
    const projectSection = document.getElementById("projects")
    projectSection.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="intro" id="intro">
      <div className="mobile-profpic">
        <img
          src="/profilepic-S.png"
          alt="profile picture of alma"
        />
      </div>
      <h2 className="title">Frontend developer</h2>
      <p className="intro-text">
        With a background in financial audit and a new-found passion for web
        development, I&apos;m currently in a fast-paced boot camp learning tools
        like React, Node.js and Express, I&apos;m blending my attention to
        detail and problem-solving skills to create user-friendly digital
        experiences.
      </p>
      <a className="intro-link" onClick={scrollToProjectSection}>
        See my projects <IoArrowDown className="intro-icon" />
      </a>
    </div>
  )
}
