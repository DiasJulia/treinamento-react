import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { Home } from './pages';

function App() {
  return (
    <>
      <Home/>
      <Home/>
      <Home/>
      <Home/>
    </>
  );
}

export default App;
