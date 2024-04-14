import { Intro } from "./components/sections/Intro"
import { Projects } from "./components/sections/Projects"
import { Skills } from "./components/sections/Skills"
import { Contact } from "./components/sections/Contact"
import { Banner } from "./components/sections/Banner"
import "./App.css"

export const App = () => {
  return (
    <div className="app-container">
      <Intro />
      <Projects />
      <Skills />
      <Contact />
      <Banner />
    </div>
  )
}
