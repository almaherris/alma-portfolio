import { NavBar } from "./components/sections/NavBar"
import { Intro } from "./components/sections/Intro"
import { Projects } from "./components/sections/Projects"
import { Skills } from "./components/sections/Skills"
import { Feedback } from "./components/sections/carousel-setup/Feedback"
import { Contact } from "./components/sections/Contact"
import { Banner } from "./components/sections/Banner"
import "./App.css"

export const App = () => {
  return (
    <>
      <NavBar />
      <div className="app-container">
        <Intro />
        <Projects />
        <Skills />
        <Feedback />
        <Contact />
      </div>
      <Banner />
    </>
  )
}
