import { Link } from "react-router-dom";
import { Button } from "antd";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  background: #fff;
  padding: 16px 20px;
  z-index: 1000;
  nav {
    display: flex;
    justify-content: space-between;
    max-width: 1440px;
    margin: 0 auto;
    &[aria-label] {
      aria-label: "Main navigation";
    }
  }
  a {
    color: #000;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
  }
  @media (max-width: 768px) {
    nav {
      flex-direction: column;
      gap: 12px;
    }
  }
`;

const StyledButton = styled(Button)`
  width: fit-content;
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
    background: #000000;
    color: #ffffff;
  }
  &:focus {
    outline: 2px solidrgba(0, 0, 0, 0.74);
    outline-offset: 2px;
  }
  @media (max-width: 768px) {
    height: 40px;
    padding: 0 16px;
    font-size: 14px;
  }
`;

const Header: React.FC = () => (
  <StyledHeader>
    <nav aria-label="Main navigation">
      <Link to="/">Some Company</Link>
      <Link to="/contact" aria-label="Navigate to contact page">
        <StyledButton type="text">Contact Us</StyledButton>
      </Link>
    </nav>
  </StyledHeader>
);

export default Header;
