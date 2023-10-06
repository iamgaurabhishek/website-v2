import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import ScrollToTop from 'common/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
