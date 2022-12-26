import React, { useEffect, useState } from "react";
import { CarouselItem, Slider, Viewport, Indicators, PrevButton, NextButton, AbsIndicators, MiniImage } from "./Carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSwipeable } from "react-swipeable";
import MiniMember from "./Member";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  if (width < 769) {
    return 2;
  } else if (width < 1200) {
    return 4;
  } else {
    return 6;
  }
}

const Carousel = ({ children }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [numInView, setnumInView] = useState(getWindowDimensions()) 
  
  const indexUpdate = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children) - numInView + 1) {
      newIndex = 0;
    }

    setActiveSlideIndex(newIndex)
  }

  useEffect(() => {
    const resizeListener = () => {
      // change width from the state object
      setnumInView(getWindowDimensions());
    };

    window.addEventListener("resize", resizeListener)

    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    }
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => indexUpdate(activeSlideIndex + 1),
    onSwipedRight: () => indexUpdate(activeSlideIndex - 1)
  });

  return (
    <Slider {...handlers}>
      <Indicators>
      <AbsIndicators>
        <PrevButton onClick={() => {
          indexUpdate(activeSlideIndex - 1)
        }}>
          <IoIosArrowBack />
        </PrevButton>

        <NextButton onClick={() => {
          indexUpdate(activeSlideIndex + 1)
        }}>
          <IoIosArrowForward />
        </NextButton>
      </AbsIndicators>
      </Indicators>
      <Viewport style={{transform: `translateX(-${activeSlideIndex * (100 / (numInView))}%)`}}> {/* contains viewable instances (6 images) */}
        {
          React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: `${(100 / (numInView))}%` })
          })
        }
      </Viewport>
    </Slider>
  )
}

const ImageSlider = ({teamData}) => {
  return (
    <Carousel teamData={teamData}>
      {teamData.map((member, index) => {
        return (
          <CarouselItem> 
            <MiniMember props={member} />
          </CarouselItem>
        )
      })}
    </Carousel>
  )
}

export default ImageSlider;