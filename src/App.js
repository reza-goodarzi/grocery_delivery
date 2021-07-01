import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
// import Home from './pages/Home';
// import Checkout from './pages/Checkout';
// import Offers from './pages/Offers';
import Faq from './pages/Faq';
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      {/* <Home /> */}
      {/* <Checkout /> */}
      {/* <Offers /> */}
      <Faq />
    </BrowserRouter>
  );
}

export default App;
