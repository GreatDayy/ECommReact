import React from "react";

 import "./Category-item.styles.scss";

const CategoryItem = ({ Category }) => {
  const { imageUrl, title, size } = Category;
  return (
    <div className={`category-container ${size}`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h1>{title.toUpperCase()}</h1>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};

export default CategoryItem;
