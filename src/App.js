import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
// import Profile from './pages/Profile';
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Home />
      {/* <Profile /> */}
    </BrowserRouter>
  );
}

export default App;
