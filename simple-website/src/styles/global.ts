import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Roboto, sans-serif;
    background: #fff;
  }
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 1.8rem;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`;