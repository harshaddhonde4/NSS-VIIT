import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import Events from './pages/Events';
import GramSetu from './pages/GramSetu';
import Home from './pages/Home';
import ScrollToTop from './pages/ScrollToTop';
import SingleEvent from './pages/SingleEvent';
import Team from './pages/Team';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/gram-setu" element={<GramSetu />} />
        <Route path="/events/singleevent" element={<SingleEvent />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
