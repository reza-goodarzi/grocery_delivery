import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Offers from './pages/Offers';
// import Home from './pages/Home';
// import Checkout from './pages/Checkout';
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      {/* <Home /> */}
      {/* <Checkout /> */}
      <Offers />
    </BrowserRouter>
  );
}

export default App;
