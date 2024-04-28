import { useCarousel } from "../../contexts/CarouselContext"

export const Carousel = () => {
  const { feedbackNumber, feedback, handlers } = useCarousel()

  const translateValue = -feedbackNumber * 100

  return (
    <div className="carousel-container" {...handlers}>
      {feedback.map(({ comment, sender, date, id }) => (
        <div
          key={id}
          className="slide"
          style={{ transform: `translateX(${translateValue}%)` }}>
          <div className="carousel-box">
            <div className="carousel-text">
              <div className="carousel-comment">{comment}</div>
              <span>{sender}</span>
              <p>{date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
