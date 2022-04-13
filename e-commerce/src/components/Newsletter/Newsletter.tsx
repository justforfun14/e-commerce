import "./Newsletter.scss";

import { Send } from "@material-ui/icons";

export const Newsletter = (): JSX.Element => {
  return (
    <div className="newsletter__container newsletter">
      <div className="newsletter__title">Newsletter</div>
      <div className="newsletter__description">
        Get timely updates from your favorite products.
      </div>
      <div className="newsletter__inputs inputs">
        <input className="inputs__email" type="text" placeholder="Your email" />
        <button className="inputs__button">
          <Send />
        </button>
      </div>
    </div>
  );
};
