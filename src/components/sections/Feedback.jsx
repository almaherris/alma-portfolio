import { FeedbackCard } from "../reusable/FeedbackCard"
import snapshots from "../../json/feedback.json"
import "./Feedback.css"

export const Feedback = () => {
  return (
    <div className="feedback" id="feedback">
      <h2 className="title">Words about me</h2>
      <div className="feedback-container">
        {snapshots.snapshots.map(({ id, comment, sender, date }) => (
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
