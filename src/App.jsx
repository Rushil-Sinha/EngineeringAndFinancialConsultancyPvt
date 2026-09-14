import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Sectors from './pages/Sectors/Sectors';
import Services from './pages/Services/Services';
import Projects from './pages/Projects/Projects';
import People from './pages/People/People';
import Contact from './pages/Contact/Contact';
import BusinessInquiry from './pages/BusinessInquiry/BusinessInquiry';

function App() {
  return (
    <BrowserRouter>
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sectors" element={<Sectors />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/people" element={<People />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/business-inquiry" element={<BusinessInquiry />} />
    </Routes>
  </Layout>
</BrowserRouter>
  );
}

export default App;