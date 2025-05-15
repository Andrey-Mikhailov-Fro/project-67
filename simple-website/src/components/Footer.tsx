import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: #fff;
  padding: 1rem;
  text-align: center;
  margin-top: auto;
`;

const Footer: React.FC = () => (
  <StyledFooter>
    <p>© 2025 Some Company. All rights reserved.</p>
  </StyledFooter>
);

export default Footer;