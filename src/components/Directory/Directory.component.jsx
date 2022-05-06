import React from "react";
import CategoryItem from "../category-item/Category-item.component";

import "./Directory.styles.scss";

const Directory = ({ Categories }) => {
  return (
    <div className="categories-container">
      {Categories.map((Category) => (
          <CategoryItem key={Category.id} Category={Category} />
      )
      )}
    </div>
  );
};

export default Directory;
