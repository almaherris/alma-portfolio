import PropTypes from "prop-types"

export const FeedbackCard = ({ comment, sender, date }) => {
  return (
    <div className="feedback-card">
      <p className="feedback-comment">&quot;{comment}&quot;</p>
      <span className="feedback-sender">{sender},</span>
      <span className="feedback-date"> {date}</span>
    </div>
  )
}

FeedbackCard.propTypes = {
  comment: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}
