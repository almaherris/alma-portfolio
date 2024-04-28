import { createContext, useContext, useState } from "react"
import { useSwipeable } from "react-swipeable"
import { PropTypes } from "prop-types"
import snapshot from "../json/snapshot.json"

const CarouselContext = createContext()

export const CarouselProvider = ({ children }) => {
  const [feedbackNumber, setFeedbackNumber] = useState(0)

  const feedback = snapshot

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setFeedbackNumber((prevNumber) =>
        prevNumber === feedback.length - 1 ? 0 : prevNumber + 1
      )
    },
    onSwipedRight: () => {
      setFeedbackNumber((prevNumber) =>
        prevNumber === 0 ? feedback.length - 1 : prevNumber - 1
      )
    },
    preventDefaultTouchmoveEvent: true,
    preventScrollOnSwipe: true,
    trackMouse: true,
  })

  const changeNumber = (newNumber) => {
    setFeedbackNumber(newNumber)
  }

  return (
    <CarouselContext.Provider
      value={{ feedbackNumber, snapshot, handlers, changeNumber }}>
      {children}
    </CarouselContext.Provider>
  )
}

export const useCarousel = () => useContext(CarouselContext)

CarouselProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
