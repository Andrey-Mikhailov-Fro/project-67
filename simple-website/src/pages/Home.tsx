import { Button } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
`;

const MainSection = styled.main`
  flex: 1;
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Hero = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  background: rgb(245, 245, 245);
  padding: 2%;
  iframe {
    width: 100%;
    height: 360px;
    border: none;
    border-radius: 8px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    iframe {
      height: 200px;
    }
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 36px;
    font-weight: 700;
    line-height: 44px;
    color: #000000;
    margin: 0;
  }
  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    color: #000000;
    margin: 0;
  }
  p {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    margin: 0;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 28px;
      line-height: 36px;
    }
    h2 {
      font-size: 20px;
      line-height: 28px;
    }
    p {
      font-size: 14px;
      line-height: 20px;
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

const ServicesSection = styled.section`
  margin-top: 48px;
  a {
    display: flex;
    justify-content: center;
    aling-items: center;
    margin: 48px 0px;
    text-decoration: none;
  }
`;

const SectionTitle = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  color: #000000;
  margin: 0 0 32px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 24px;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const Card = styled.div`
  background: #f9f9f9;
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  h3 {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    color: #000000;
    margin: 0;
  }
  p {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    margin: 0;
    flex: 1;
  }
  @media (max-width: 768px) {
    padding: 16px;
    h3 {
      font-size: 18px;
      line-height: 24px;
    }
    p {
      font-size: 13px;
      line-height: 18px;
    }
  }
`;

const AdditionalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  aling-items: center;
  width: 100%;
  background: rgb(245, 245, 245);
  padding: 2%;
  h1 {
    width: 100%;
    text-align: center;
  }
  a {
    display: flex;
    justify-content: center;
    aling-items: center;
    text-decoration: none;
  }
`;

const Home: React.FC = () => {
  console.log("Rendering Home"); // Для отладки
  return (
    <Container>
      <Header />
      <MainSection>
        <Hero>
          <TextContent>
            <h1>Main Title</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </TextContent>
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Promotional Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </Hero>
        <ServicesSection>
          <SectionTitle>Our Services</SectionTitle>
          <CardsGrid>
            {Array.from({ length: 6 }, (_, index) => (
              <Card key={index}>
                <h3>Service {index + 1}</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>
              </Card>
            ))}
          </CardsGrid>
          <Link to="/contact" aria-label="Navigate to contact page">
            <StyledButton type="text">Contact Us</StyledButton>
          </Link>
        </ServicesSection>
        <AdditionalContent>
          <h1>Additional Information</h1>
          <Link to="/contact" aria-label="Navigate to contact page">
            <StyledButton type="text">Contact Us</StyledButton>
          </Link>
        </AdditionalContent>
      </MainSection>
      <Footer />
    </Container>
  );
};

export default Home;
