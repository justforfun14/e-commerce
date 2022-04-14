import "./ProductItem.scss";

import { Announcments } from "../../components/Announcments/Announcements";
import { Footer } from "../../components/Footer/Footer";
import { NavBar } from "../../components/NavBar/NavBar";
import { Newsletter } from "../../components/Newsletter/Newsletter";

import { Add, Remove } from "@material-ui/icons";

export const ProductItem = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <Announcments />
      <div className="product-item product-item__wrapper">
        <div className="product-img product-img__wrapper">
          <img
            className="product-img__img"
            src="https://i.ibb.co/S6qMxwr/jean.jpg"
            alt="Clothes"
          />
        </div>
        <div className="product-item__info product-info">
          <h2 className="product-info__title">Denim Jumpsuit</h2>
          <div className="product-info__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </div>
          <span className="product-info__price">$ 20</span>
          <div className="product-filter-container product-filter-container__wrapper">
            <div className="product-filter">
              <span className="product-filter__title">Color</span>
              <div
                className="product-filter__color"
                style={{ backgroundColor: "black" }}
              ></div>
              <div
                className="product-filter__color"
                style={{ backgroundColor: "darkblue" }}
              ></div>
              <div
                className="product-filter__color"
                style={{ backgroundColor: "gray" }}
              ></div>
            </div>

            <div className="product-filter">
              <span className="product-filter__title">Size</span>
              <select name="product-size" id="">
                <option className="product-size__option" value="XS">
                  XS
                </option>
                <option className="product-size__option" value="S">
                  S
                </option>
                <option className="product-size__option" value="M">
                  M
                </option>
                <option className="product-size__option" value="L">
                  L
                </option>
                <option className="product-size__option" value="XL">
                  XL
                </option>
              </select>
            </div>
          </div>

          <div className="product-add product-add__wrapper">
            <div className="product-amount product-amount__wrapper">
              <Add />
              <span className="product-amount__amount">1</span>
              <Remove />
            </div>
            <button className="product-amount__button">ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};
