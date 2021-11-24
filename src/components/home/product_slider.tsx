import React, { useState } from "react";
import { IProductSlider, ISlider } from "../../interface/home/IProductSlider";
import "../../styles/home/slider.scss";
import { NAVIGATION_TYPE } from "../../consts/slider";

export const ProductSlider: React.FC<IProductSlider> = ({
  details,
  sliderButtonLabel,
}) => {
  const [activeSlide, setActiveSlide] = useState<number>(1);
  const sliderContainer = () => {
    return (
      <div className="slider-container">
        <a
          className="prev"
          onClick={() => {
            sliderNavigation(NAVIGATION_TYPE.Prev);
          }}
        >
          &#10094;
        </a>
        {sliderBox()}
        <a
          className="next"
          onClick={() => {
            sliderNavigation(NAVIGATION_TYPE.Next);
          }}
        >
          &#10095;
        </a>
      </div>
    );
  };
  const sliderBox = () => {
    return (
      <>
        {processedArray().map((detailItem, index) => {
          return (
            <div
              key={detailItem.productImage.alt}
              className={index == 1 ? "slide  " : "slide slide-inactive"}
            >
              <div className="slide-label-top">{detailItem.useLabel}</div>
              <div>
                <img
                  className="slide-top-image"
                  src={detailItem.setLabel.url}
                  alt={detailItem.setLabel.alt}
                />
              </div>
              <div className="slide-label-bottom">
                {detailItem.recommendationLabel}
              </div>
              <div>
                <img
                  className="slide-image"
                  src={detailItem.productImage.url}
                  alt={detailItem.productImage.alt}
                />
              </div>
              <div>
                <button className="slide-btn">{sliderButtonLabel}</button>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  const sliderNavigation = (type: NAVIGATION_TYPE) => {
    let currentslide: number = activeSlide;
    if (type === NAVIGATION_TYPE.Prev) {
      currentslide--;
    } else {
      currentslide++;
    }
    if (currentslide < 0) {
      currentslide = details.length - 1;
    } else if (currentslide == details.length) {
      currentslide = 0;
    }
    setActiveSlide(currentslide);
  };
  const processedArray = () => {
    if (details && details.length >= 2) {
      let firstSlide = activeSlide - 1;
      let lastSlide = activeSlide + 1;
      if (firstSlide < 0) {
        firstSlide = details.length - 1;
      }
      if (lastSlide >= details.length) {
        lastSlide = 0;
      }
      console.log(firstSlide, activeSlide, lastSlide, details.length);

      return [details[firstSlide], details[activeSlide], details[lastSlide]];
    }
    return [];
  };
  return sliderContainer();
};
