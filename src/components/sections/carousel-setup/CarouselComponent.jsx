import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import snapshot from "../../../json/snapshot.json"
import "./CarouselComponent.css"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
}

export const CarouselComponent = () => {
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      infinite={true}
      autoPlay={false}
      keyBoardControl={true}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px">
      {snapshot.snapshot.map((item) => (
        <div className="feedback-item" key={item.id}>
          <p className="feedback-comment">&quot;{item.comment}&quot;</p>
          <p className="feedback-sender">- {item.sender}</p>
        </div>
      ))}
    </Carousel>
  )
}
