import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Home />
    </BrowserRouter>
  );
}

export default App;
