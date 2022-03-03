import "../styles/Slider.scss";

import { ArrowLeftOutlined } from "@material-ui/icons";
import { ArrowRightOutlined } from "@material-ui/icons";

export const Slider = () => {
  return (
    <div className="slider slider__wrapper">
      <div className="leftArrow">
        <ArrowLeftOutlined />
      </div>

      <div className="rightArrow">
        <ArrowRightOutlined />
      </div>
    </div>
  );
};
