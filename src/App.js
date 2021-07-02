import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/globalStyle';
import Header from './components/Header/Header';
// import Home from './pages/Home';
// import Checkout from './pages/Checkout';
// import Offers from './pages/Offers';
// import Faq from './pages/Faq';
// import NotFound from './pages/NotFound';
import OrderReceived from './pages/OrderReceived';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      {/* <Home /> */}
      {/* <Checkout /> */}
      {/* <Offers /> */}
      {/* <Faq /> */}
      <OrderReceived />
      {/* <NotFound /> */}
    </BrowserRouter>
  );
}

export default App;
