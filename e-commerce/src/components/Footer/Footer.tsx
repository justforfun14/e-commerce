import "./Footer.scss";

import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";

export const Footer = (): JSX.Element => {
  return (
    <div className="footer__wrapper footer">
      <div className="footer__left left">
        <div className="left__logo"></div>
        <div className="left__description">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </div>
        <div className="socials socials__wrapper">
          <div className="socials__icon">
            <Facebook color="action" />
          </div>
          <div className="socials__icon">
            <Instagram color="action" />
          </div>
          <div className="socials__icon">
            <Twitter color="action" />
          </div>
          <div className="socials__icon">
            <Pinterest color="action" />
          </div>
        </div>
      </div>
      <div className="footer__center">
        <h3 className="footer__title">Useful Links</h3>
        <ul className="footer__links">
          <li className="footer__link">Home</li>
          <li className="footer__link">Cart</li>
          <li className="footer__link">Man Fashion</li>
          <li className="footer__link">Woman Fashion</li>
          <li className="footer__link">Accessories</li>
          <li className="footer__link">My Account</li>
          <li className="footer__link">Order Tracking</li>
          <li className="footer__link">Wishlist</li>
          <li className="footer__link">Terms</li>
          <li className="footer__link">?????</li>
        </ul>
      </div>
      <div className="footer__right">
        <h3 className="footer__title">Contact</h3>
        <div className="footer__contact">
          <Room style={{ marginRight: "10px" }} /> Definetely Minsk
        </div>
        <div className="footer__contact">
          <Phone style={{ marginRight: "10px" }} /> +375 29
        </div>
        <div className="footer__contact">
          <MailOutline style={{ marginRight: "10px" }} /> contact@bobo.by
        </div>
        <img
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          alt="Pic"
          className="footer__payment"
        />
      </div>
    </div>
  );
};
