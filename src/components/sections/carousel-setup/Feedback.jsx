import { CarouselComponent } from "./CarouselComponent"
import { useLanguageData } from "../../../hooks/useLanguageData"

export const Feedback = () => {
  const data = useLanguageData()

  return (
    <div className="feedback" id="feedback">
      <h2 className="title">{data.feedback.title}</h2>
      <div className="feedback-container">
        <CarouselComponent />
      </div>
    </div>
  )
}
