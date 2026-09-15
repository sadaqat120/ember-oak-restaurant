import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Banquet from './pages/Banquet';
import Catering from './pages/Catering';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Hours from './pages/Hours';
import Booking from './pages/Booking';
import MenuKit from './pages/MenuKit';
import Hosting from './pages/Hosting';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/banquet" element={<Banquet />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hours" element={<Hours />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/menu-kit" element={<MenuKit />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
