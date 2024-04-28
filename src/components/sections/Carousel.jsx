import { useState, useEffect } from "react"
import { useSwipeable } from "react-swipeable"
import "./Carousel.css"

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {})
  })

  return <div>Carousel</div>
}
