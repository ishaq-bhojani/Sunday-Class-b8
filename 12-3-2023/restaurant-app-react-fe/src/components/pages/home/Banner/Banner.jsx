import "./Banner.css";
import { Button, Carousel, Col, Row } from "antd";
import Container from "../../../common/container/Container";

const Banner = () => {
  return (
    <section>
      <Carousel autoplay>
        <div className="banner banner-slide-1">
          <Container>
            <Row>
              <Col span={24} className="content">
                <h5 className="food-title">PIZZA</h5>
                <h1 className="food-detail">
                  Crispy Mixed Pizza
                  <br /> With Olives
                </h1>
              </Col>
              <Col span={24}>
                <Button type="primary" size="large">
                  Shop Now
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="banner banner-slide-2">
          <Container>
            <Row>
              <Col span={24} className="content">
                <h5 className="food-title">BURGER</h5>
                <h1 className="food-detail">
                  Crispy Veg Double
                  <br /> Patty Burger
                </h1>
              </Col>
              <Col span={24}>
                <Button type="primary" size="large">
                  Shop Now
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </Carousel>
    </section>
  );
};

export default Banner;
