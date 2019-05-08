import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Video from '../Utils/Video';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../Theme/theme';
import { Route } from 'react-router-dom';
function Home() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <StHome>
          <Header />
          <p>sfD</p>
          <Footer />
        </StHome>
      </>
    </ThemeProvider>
  );
}

export default Home;

const StHome = styled.div`
  border-radius: 0.5em;
  width: 85%;
  padding: 0;
  margin: 1em auto;
  background-color: #000;
  max-height: 100%;
`;
