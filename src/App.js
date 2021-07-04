import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/globalStyle';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Offers from './pages/Offers';
import Faq from './pages/Faq';
import NotFound from './pages/NotFound';
import OrderReceived from './pages/OrderReceived';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>

        <Route path='/' exact>
          <Home />
        </Route>

        <Route path='/checkout'>
          <Checkout />
        </Route>

        <Route path="/offers">
          <Offers />
        </Route>

        <Route path="/faq">
          <Faq />
        </Route>

        <Route path="/order_received">
          <OrderReceived />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
