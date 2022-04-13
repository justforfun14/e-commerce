import "./Products.scss";

import { ProductItem } from "../ProductItem/ProductItem";

import { popularProducts } from "../../fakeData/popularProducts";

export const Products = (): JSX.Element => {
  return (
    <div className="products products__wrapper">
      {popularProducts.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};
