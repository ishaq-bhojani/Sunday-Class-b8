import "./Menu.css";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Menu = () => {
  return (
    <div className="header">
      <div className="category">
        <button className="Categories">Restaurant App</button>
      </div>
      <div className="menu">
        <a href to="/" className="navhref">
          Today Deal
        </a>
        <a href to="/policy" className="navhref">
          Policy
        </a>
        <a href to="/about" className="navhref">
          About
        </a>
        <a href to="/contact" className="navhref">
          Contact
        </a>
      </div>
      <div className="cart">
        <ShoppingCartOutlined className="cart-icon" />
        <h4>My Cart</h4>
        <div className="amount">Rs. 00</div>
      </div>
    </div>
  );
};

export default Menu;
