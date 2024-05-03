import { useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext"
import enData from "../json/languages/data.en.json"
import svData from "../json/languages/data.sv.json"

export const useLanguageData = () => {
  const { language } = useContext(LanguageContext)
  const data = language === "en" ? enData : svData

  return data
}
