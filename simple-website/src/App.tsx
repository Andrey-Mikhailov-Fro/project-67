import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { GlobalStyle } from './styles/global';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </>
);

export default App;