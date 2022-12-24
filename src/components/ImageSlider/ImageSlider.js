import React, { useState } from "react";
import { CarouselItem, Slider, Viewport, Indicators, PrevButton, NextButton, AbsIndicators } from "./Carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSwipeable } from "react-swipeable";

const placeholder = require("../../images/placeholder-image.jpeg");

const Carousel = ({ children, height }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  
  const indexUpdate = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }

    setActiveSlideIndex(newIndex)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => indexUpdate(activeSlideIndex + 1),
    onSwipedRight: () => indexUpdate(activeSlideIndex - 1)
  });

  return (
    <Slider {...handlers}>
      <Indicators>
      <AbsIndicators>
        <PrevButton height={height} onClick={() => {
          indexUpdate(activeSlideIndex - 1)
        }}>
          <IoIosArrowBack />
        </PrevButton>

        <NextButton height={height} onClick={() => {
          indexUpdate(activeSlideIndex + 1)
        }}>
          <IoIosArrowForward />
        </NextButton>
      </AbsIndicators>
      </Indicators>
      <Viewport style={{transform: `translateX(-${activeSlideIndex * 100}%)`}}> {/* contains viewable instances (6 images) */}
        {
          React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: "100%", height: `${height}` })
          })
        }
      </Viewport>
    </Slider>
  )
}

const ImageSlider = ({sliderHeight}) => {
  
  return (
    <Carousel height={sliderHeight}>
      <CarouselItem>Item 1 </CarouselItem>
      <CarouselItem>Item 2 </CarouselItem>
      <CarouselItem>Item 3 </CarouselItem> 
      <CarouselItem>Item 4 </CarouselItem>
    </Carousel>
  )
}

export default ImageSlider;