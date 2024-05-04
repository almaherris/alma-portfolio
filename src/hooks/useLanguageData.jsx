import { useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext"
import enData from "../json/languages/data.en.json"
import svData from "../json/languages/data.sv.json"
import frData from "../json/languages/data.fr.json"

export const useLanguageData = () => {
  const { language } = useContext(LanguageContext)

  let data

  switch (language) {
    case "en":
      data = enData
      break
    case "sv":
      data = svData
      break
    case "fr":
      data = frData
      break
    default:
      data = enData
  }

  return data
}
