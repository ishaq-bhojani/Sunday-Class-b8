import { Button, Form, Input, Modal, Select } from "antd";
import { LeftOutlined } from "@ant-design/icons";

import "./CheckoutForm.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { emptyCart } from "../../../store/reducers/cartReducer";

const CheckoutForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const success = () => {
    Modal.success({
      title: "Order Placed!",
      content: "Your order has been successfully placed",
      onOk() {
        dispatch(emptyCart());
        navigate("/");
      },
    });
  };

  const formSubmitHandler = (values) => {
    console.log(values);
    success();
  };

  return (
    <Form className="checkout-form" onFinish={formSubmitHandler}>
      <div className="flex">
        <Form.Item name="firstName">
          <Input placeholder="First name (optional)" />
        </Form.Item>

        <Form.Item name="lastName">
          <Input placeholder="Last name" />
        </Form.Item>
      </div>

      <Form.Item name="country">
        <Select placeholder="Country/Region">
          <Select.Option value="pakistan">Pakistan</Select.Option>
          <Select.Option value="india">India</Select.Option>
          <Select.Option value="bangladesh">Bangladesh</Select.Option>
          <Select.Option value="afghanistan">Afghanistan</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item name="apartment">
        <Input placeholder="Apartment, suit, etc. (optional)" />
      </Form.Item>

      <Form.Item name="address">
        <Input placeholder="Address" />
      </Form.Item>

      <div className="flex">
        <Form.Item name="city">
          <Input placeholder="City" />
        </Form.Item>

        <Form.Item name="state">
          <Select placeholder="state"></Select>
        </Form.Item>

        <Form.Item name="zipCode">
          <Input placeholder="ZIP code" />
        </Form.Item>
      </div>

      <div className="actions">
        <Link className="link" to="/cart">
          <LeftOutlined /> Return to cart
        </Link>

        <Button type="primary" htmlType="submit">
          Continue to shipping
        </Button>
      </div>
    </Form>
  );
};

export default CheckoutForm;
