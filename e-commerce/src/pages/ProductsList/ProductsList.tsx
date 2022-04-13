import "./ProductsList.scss";

import { Announcement } from "@material-ui/icons";
import { Footer } from "../../components/Footer/Footer";
import { NavBar } from "../../components/NavBar/NavBar";
import { Newsletter } from "../../components/Newsletter/Newsletter";
import { Products } from "../../components/Products/Products";

export const ProductsList = (): JSX.Element => {
  return (
    <div className="products-list products-list__wrapper">
      <NavBar />
      <Announcement />
      <div className="products-list__title">Dresses</div>
      <div className="filters filters__wrapper">
        <div className="filter">
          <span className="filter__text">Filter Products:</span>
          <select
            className="filter__select"
            name="dress-color"
            id=""
            defaultValue="Color"
          >
            <option value="Color" disabled>
              Color
            </option>
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Yellow">Yellow</option>
            <option value="Green">Green</option>
          </select>

          <select
            className="filter__select"
            name="dress-size"
            id=""
            defaultValue="Size"
          >
            <option value="Size" disabled>
              Size
            </option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>

        <div className="filter">
          <span className="filter__text">Sort Products:</span>
          <select
            className="filter__select"
            name="dress-order"
            id=""
            defaultValue="Newest"
          >
            <option value="Newest" disabled>
              Newest
            </option>
            <option value="Price (asc)">Price (asc)</option>
            <option value="Price (desc)">Price (desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};
