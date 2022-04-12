import "./Categories.scss";

import { CategoryItem } from "../CategoryItem/CategoryItem";

import { categories } from "../../fakeData/categories";

export const Categories = (): JSX.Element => {
  return (
    <div className="categories categories__wrapper">
      {categories.map((category) => {
        return <CategoryItem item={category} key={category.id} />;
      })}
    </div>
  );
};
