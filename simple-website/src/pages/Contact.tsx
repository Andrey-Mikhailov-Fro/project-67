import { useState } from "react";
import { Form, Input, Button, message, type FormProps } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  background: rgb(245, 245, 245);
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 120px);
`;

const StyledForm = styled(Form)<FormProps<FormValues>>`
  width: 25%;
  max-width: 600px;
  background: #fff;
  padding: 2%;
  border-radius: 8px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  .ant-input {
    border-radius: 4px;
    &:focus {
      border-color: #1890ff;
      box-shadow: 0 0 8px rgba(24, 144, 255, 0.3);
    }
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 48px;
  padding: 0 24px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  background: #000000;
  border: none;
  color: #ffffff;
  border-radius: 8px;
  transition: clip-path 0.3s ease;
  &:hover,
  &:focus {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    background: #000000;
    color: #ffffff;
  }
  &:focus {
    outline: 2px solid #000000;
    outline-offset: 2px;
  }
  @media (max-width: 768px) {
    height: 40px;
    padding: 0 16px;
    font-size: 14px;
  }
`;

const ResponseMessage = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin-top: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  p {
    margin: 0 0 0.5rem;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    color: #000000;
  }
  a {
    color: #1890ff;
    text-decoration: none;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
  }
`;

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [form] = Form.useForm<FormValues>();
  const [response, setResponse] = useState<string>("");

  const onFinish = async (values: FormValues) => {
    console.log("Form values:", values);
    try {
      const res = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      console.log("Response status:", res.status);
      console.log("Response headers:", [...res.headers.entries()]);
      const data = await res.json();
      console.log("Response data:", data);
      if (res.ok && data.message) {
        setResponse(data.message);
        form.resetFields();
        message.success("Form submitted successfully");
      } else {
        console.log("No message in response or bad status");
        message.error("No message received from server");
        setResponse("");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      message.error("Submission failed: " + error);
      setResponse("");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <h1>Contact Us</h1>
        {response ? (
          <ResponseMessage>
            <p>{response}</p>
            <Link to="/">Back to Home</Link>
          </ResponseMessage>
        ) : (
          <StyledForm form={form} onFinish={onFinish} layout="vertical">
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <StyledButton htmlType="submit" type="text">Submit</StyledButton>
            </Form.Item>
          </StyledForm>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Contact;