import Meta from "antd/es/card/Meta";
import { Button, Card, Rate, theme, Typography } from "antd";
import "./ProductCard.css";

const ProductCard = ({
  id,
  title,
  imageUrl,
  price,
  toppings,
  rate,
  unit = "$",
  loading,
  onAddToCartClick,
}) => {
  const { Text } = Typography;
  const { token } = theme.useToken();
  return (
    <Card
      className="product-card-item"
      bordered={false}
      cover={<img alt={title} src={imageUrl} />}
      loading={loading}
    >
      <div>
        <Rate disabled defaultValue={rate} />
        <Meta title={title} description={toppings} />
      </div>
      <div className="action">
        <Button type="primary" onClick={() => onAddToCartClick(id)}>
          Add to cart
        </Button>
        <Text style={{ color: token.colorPrimary }}>
          {unit}
          {price}
        </Text>
      </div>
    </Card>
  );
};

export default ProductCard;
