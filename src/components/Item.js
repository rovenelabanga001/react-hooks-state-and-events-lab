import React from "react";

function Item({ name, category }) {
  const [isActive, setIsActive] = React.useState(false);

  function handleToggle() {
    setIsActive((prevState) => !prevState);
  }
  return (
    <li className={isActive ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleToggle}>
        {isActive ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
