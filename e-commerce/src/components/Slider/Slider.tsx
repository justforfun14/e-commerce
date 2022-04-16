import "./Slider.scss";

import { useState } from "react";

import { ArrowLeftOutlined } from "@material-ui/icons";
import { ArrowRightOutlined } from "@material-ui/icons";

import { sliderData } from "../../fakeData/sliderData";

export const Slider = (): JSX.Element => {
  const [slideIndex, setSlideIndex] = useState(0);

  const onClick = (direction: string) => {
    if (direction === "left") {
      setSlideIndex((prevIndex) => {
        return prevIndex === 0 ? 3 : prevIndex - 1;
      });
    } else {
      setSlideIndex((prevIndex) => {
        return prevIndex === 3 ? 0 : prevIndex + 1;
      });
    }
  };

  return (
    <div className="slider slider__wrapper">
      <div className="leftArrow" onClick={() => onClick("left")}>
        <ArrowLeftOutlined />
      </div>

      <div
        className="slider__movable"
        style={{ transform: `translateX(calc(${-slideIndex * 100}vw)` }}
      >
        {sliderData.map((slide) => {
          return (
            <div
              className="slider__content content"
              style={{ background: slide.bg }}
              key={slide.id}
            >
              <div className="content__img">
                <img className="content__image" src={slide.img} alt="Clothes" />
              </div>
              <div className="content__info info">
                <div className="info__title">{slide.title}</div>
                <div className="info__description">{slide.description}</div>
                <button className="info__button">Show now</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="rightArrow" onClick={() => onClick("right")}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
};
