import { Divider } from "antd";
import Banner from "./Banner/Banner";
import ProductGrid from "./ProductGrid/ProductGrid";
const Home = () => {
  return (
    <>
      <Banner />
      <Divider className="hidden" style={{ marginTop: 80 }} />
      <ProductGrid />
      <Divider className="hidden" style={{ marginTop: 80 }} />
    </>
  );
};

export default Home;
