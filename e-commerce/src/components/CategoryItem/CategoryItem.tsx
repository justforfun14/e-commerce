import "./CategoryItem.scss";

import { ICategoriesItem } from "../../interfaces/ICategoriesItem";

export const CategoryItem = (props: { item: ICategoriesItem }): JSX.Element => {
  const category = props.item;
  return (
    <div className="category-item category-item__wrapper">
      <img className="category-item__img" src={category.img} alt="Clothes" />

      <div className="category-item__info item-info">
        <h2 className="item-info__title">{category.title}</h2>
        <button className="item-info__button">SHOP NOW</button>
      </div>
    </div>
  );
};
