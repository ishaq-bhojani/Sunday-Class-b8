import { Button, Col, Form, Input, Row, Typography, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../../../store/reducers/authReducer";
import { InnerPageBanner } from "../../../common/banner/inner-page-banner/InnerPageBanner";
import Container from "../../../common/container/Container";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const createUserHandler = (values) => {
    dispatch(createUser(values))
      .unwrap()
      .then(() => {
        navigate("/signin");
        message.success("Sign Up Successful");
      })
      .catch((err) => message.error(err.message));
  };

  return (
    <>
      <InnerPageBanner title="Create An Account" />
      <Container>
        <Row
          justify="center"
          style={{ textAlign: "center", padding: "3rem 0" }}
        >
          <Col span={12}>
            <div className="form-wrapper">
              <Typography.Title level={3}>Sign Up</Typography.Title>
              <Form
                wrapperCol={{
                  span: 24,
                }}
                layout="horizontal"
                size="large"
                style={{
                  width: "100%",
                }}
                onFinish={createUserHandler}
              >
                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: "User Name is required" },
                    { type: "text", message: "Please enter a valid user name" },
                    {
                      min: 5,
                      message: "Username must be minimum 5 characters.",
                    },
                  ]}
                >
                  <Input placeholder="User Name" />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Email is required" },
                    { type: "email", message: "Please enter a valid email" },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Password is required",
                      whitespace: true,
                    },
                    {
                      min: 6,
                      message: "Password must be at least 6 characters",
                    },
                  ]}
                >
                  <Input.Password placeholder="Password" />
                </Form.Item>

                <Form.Item className="form-item-button">
                  <Button type="primary" htmlType="submit" loading={isLoading}>
                    Sign Up
                  </Button>
                </Form.Item>
              </Form>
              <Button
                onClick={() => navigate("/signin")}
                type="link"
                className=""
              >
                Already have an Account
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUp;
