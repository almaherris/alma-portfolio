import { useContext } from "react"
import { LanguageContext } from "../../contexts/LanguageContext"
import "./LanguageSelector.css"

export const LanguageSelector = () => {
  const { toggleLanguage } = useContext(LanguageContext)

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value
    toggleLanguage(selectedLanguage)
  }

  return (
    <div>
      <label htmlFor="language" className="visually-hidden">
        Select Language
      </label>
      <select
        className="language-selector"
        name="language-selector"
        id="language-selector"
        aria-label="Select Language"
        onChange={handleLanguageChange}>
        <option value="en">EN</option>
        <option value="sv">SV</option>
        <option value="fr">FR</option>
      </select>
    </div>
  )
}
