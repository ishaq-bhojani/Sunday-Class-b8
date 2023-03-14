import { Breadcrumb } from "antd";
import { RightOutlined, QuestionCircleFilled } from "@ant-design/icons";

import CheckoutForm from "./CheckoutForm";
import CartItem from "./CartItem";

import "./Checkout.css";
import { useDispatch, useSelector } from "react-redux";
import { cartSubTotal } from "../../../store/reducers/cartReducer";

const Checkout = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  return (
    <div className="checkout">
      <div className="checkout__left-section">
        {/* <h2>Foodoliv - Fast Food Store</h2> */}

        <Breadcrumb separator={<RightOutlined className="icon" />}>
          <Breadcrumb.Item>Cart</Breadcrumb.Item>
          <Breadcrumb.Item>Information</Breadcrumb.Item>
          <Breadcrumb.Item>Shipping</Breadcrumb.Item>
          <Breadcrumb.Item>Payment</Breadcrumb.Item>
        </Breadcrumb>

        {/* <h4>Contact information</h4>
        <p className="account-detail">Fuzail Ahmed (fuzail@mailinter.com)</p>
        <p className="logout">Log out</p> */}

        <h3>Shipping address</h3>
        <CheckoutForm />
        {/* <div className="footer">
          All rights reserved Foodoliv - Fast Food Store
        </div> */}
      </div>

      <div className="checkout__right-section">
        {cart.map((cartItem) => (
          <CartItem {...cartItem} />
        ))}

        <div className="cart-details">
          <div>
            <span>Subtotal</span>
            <span className="price">${dispatch(cartSubTotal())}</span>
          </div>

          <div>
            <span>Shipping</span>
            <span>Calculate at next step</span>
          </div>

          <div>
            <span>
              Estimated taxes <QuestionCircleFilled className="question-mark" />
            </span>
            <span className="price">$167.40</span>
          </div>
        </div>

        <div className="cart-total">
          <span>Total</span>
          <span>
            <span>USD</span> <span>$1,097.40</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
