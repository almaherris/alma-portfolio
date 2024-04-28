import snapshot from "../../../json/snapshot.json"

export const FeedbackCard = () => {
  return (
    <div className="feedback-card">
      {snapshot.snapshot.map(({ id, comment, sender, date }) => (
        <div className="feedback-card" key={id}>
          <p className="feedback-comment">&quot;{comment}&quot;</p>
          <span className="feedback-sender">{sender},</span>
          <span className="feedback-date"> {date}</span>
        </div>
      ))}
    </div>
  )
}
