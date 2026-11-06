import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './pages/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const Team = lazy(() => import('./pages/Team'));
const Contact = lazy(() => import('./pages/Contact'));
const Events = lazy(() => import('./pages/Events'));
const About = lazy(() => import('./pages/About'));
const Achievements = lazy(() => import('./pages/Achievements'));
const GramSetu = lazy(() => import('./pages/GramSetu'));
const SingleEvent = lazy(() => import('./pages/SingleEvent'));

const PageLoader = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '60vh',
      color: '#1B6B3A',
    }}
  >
    <div className="spinner-border text-success" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true, offset: 60 });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/gram-setu" element={<GramSetu />} />
          <Route path="/gramsetu" element={<GramSetu />} />
          <Route path="/events/singleevent" element={<SingleEvent />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
