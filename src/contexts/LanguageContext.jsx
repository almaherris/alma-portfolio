import PropTypes from "prop-types"
import { createContext, useState } from "react"

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en")
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "sv" : "en"))
  }
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
