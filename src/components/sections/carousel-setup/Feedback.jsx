import { CarouselComponent } from "./CarouselComponent"
import "./Feedback.css"

export const Feedback = () => {
  return (
    <div className="feedback" id="feedback">
      <h2 className="title">Words about me</h2>
      <div className="feedback-container">
        
        <CarouselComponent/>

      </div>
    </div>
  )
}
