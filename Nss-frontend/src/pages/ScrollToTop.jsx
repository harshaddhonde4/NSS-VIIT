import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Aos from 'aos';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant scroll reset on route change ensures immediate page responsiveness
    window.scrollTo(0, 0);
    // Refresh AOS animation positions for dynamically mounted route content
    Aos.refresh();
  }, [pathname]);

  return null;
}

export default ScrollToTop;
