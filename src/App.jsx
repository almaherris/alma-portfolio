import { LanguageProvider } from "./contexts/LanguageContext"
import { NavBar } from "./components/sections/NavBar"
import { Intro } from "./components/sections/Intro"
import { Tech } from "./components/sections/Tech"
import { Projects } from "./components/sections/Projects"
import { Skills } from "./components/sections/Skills"
import { Feedback } from "./components/sections/carousel-setup/Feedback"
import { Contact } from "./components/sections/Contact"
import { Banner } from "./components/sections/Banner"
import "./App.css"

export const App = () => {
  return (
    <LanguageProvider>
      <NavBar />
      <div className="app-container">
        <Intro />
        <Tech />
        <Projects />
        <Skills />
        <Feedback />
        <Contact />
      </div>
      <Banner />
    </LanguageProvider>
  )
}
