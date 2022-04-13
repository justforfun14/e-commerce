import "./ProductItem.scss";

import { IPopularProductItem } from "../../interfaces/IPopularProductItem";

import { ShoppingCartOutlined } from "@mui/icons-material";
import { SearchOutlined } from "@mui/icons-material";
import { FavoriteBorderOutlined } from "@mui/icons-material";

export const ProductItem = (props: {
  product: IPopularProductItem;
}): JSX.Element => {
  const { product } = props;
  return (
    <div className="product-item product-item__wrapper">
      <div className="product-item__circle"></div>
      <img className="product-item__img" src={product.img} alt="Clothes" />
      <div className="product-item__info">
        <div className="product-item__icon">
          <ShoppingCartOutlined />
        </div>
        <div className="product-item__icon">
          <SearchOutlined />
        </div>
        <div className="product-item__icon">
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
};
