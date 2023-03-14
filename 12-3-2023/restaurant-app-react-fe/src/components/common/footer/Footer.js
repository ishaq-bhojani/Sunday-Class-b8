import { Col, Row, Typography } from "antd";
import Container from "../container/Container";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col span={24}>
            <Typography.Text style={{ color: "#b2b2b2" }}>
              Copyright © {new Date().getFullYear()} by Restaurant App
            </Typography.Text>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
