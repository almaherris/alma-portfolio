import { Carousel } from "./Carousel"
import { useCarousel } from "../../contexts/CarouselContext"

export const Feedback = () => {
  const { feedbackNumber, changeNumber } = useCarousel()

  return (
    <div className="feedback" id="feedback">
      <h2 className="title">Words about me</h2>
      <Carousel />
      <div className="button-container">
        <button
          className={`carousel-btn ${feedbackNumber === 0 ? "active" : ""}`}
          onClick={() => changeNumber(0)}
        />
        <button
          className={`carousel-btn ${feedbackNumber === 1 ? "active" : ""}`}
          onClick={() => changeNumber(1)}
        />
        <button
          className={`carousel-btn ${feedbackNumber === 2 ? "active" : ""}`}
          onClick={() => changeNumber(2)}
        />
         <button
          className={`carousel-btn ${feedbackNumber === 3 ? "active" : ""}`}
          onClick={() => changeNumber(3)}
        />
         <button
          className={`carousel-btn ${feedbackNumber === 4 ? "active" : ""}`}
          onClick={() => changeNumber(4)}
        />
         <button
          className={`carousel-btn ${feedbackNumber === 5 ? "active" : ""}`}
          onClick={() => changeNumber(5)}
        />
      </div>
    </div>
  )
}

/*import { FeedbackCard } from "../reusable/FeedbackCard"
import snapshot from "../../json/snapshot.json"
import "./Feedback.css"

export const Feedback = () => {
  return (
    <div className="feedback" id="feedback">
      <h2 className="title">Words about me</h2>
      <div className="feedback-container">
        {snapshot.snapshot.map(({ id, comment, sender, date }) => (
          <FeedbackCard
            key={id}
            comment={comment}
            sender={sender}
            date={date}
          />
        ))}
      </div>
    </div>
  )
}
*/
