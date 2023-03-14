import React from "react";
import { Badge } from "antd";

import "./CartItem.css";

const CartItem = ({ title, thumbnail, price, quantity }) => {
  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <Badge count={quantity} color="#787778">
          <div className="image">
            <img src={thumbnail} alt={title} />
          </div>
        </Badge>

        <div>
          <h4>{title}</h4>
          <p>Mushrooms</p>
        </div>
      </div>

      <div className="cart-item__price">${price}</div>
    </div>
  );
};

export default CartItem;
