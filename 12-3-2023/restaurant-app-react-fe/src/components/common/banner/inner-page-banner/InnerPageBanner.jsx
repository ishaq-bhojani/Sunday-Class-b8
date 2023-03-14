import "./InnerPageBanner.css";
import { Link } from "react-router-dom";
import Container from "../../container/Container";
import { Col, Row, Space, Typography } from "antd";

export const InnerPageBanner = ({ title }) => {
  return (
    <section className="inner-banner">
      <Container>
        <Row>
          <Col span={24}>
            <Space direction="vertical">
              <div>
                <Link to="/">
                  <span style={{ color: "white" }}>Home</span>
                </Link>{" "}
                / <span>{(title && title) || "Page Title"}</span>
              </div>
              <Typography.Title level={2}>
                {(title && title) || "Page Title"}
              </Typography.Title>
            </Space>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
