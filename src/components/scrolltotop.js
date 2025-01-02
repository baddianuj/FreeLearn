import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // Re-run effect on location change

  return null; // This component doesn't render any JSX
}

export default ScrollToTop;
