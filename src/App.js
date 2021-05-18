import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home';
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
    </>
  );
}

export default App;
