import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Video from '../Utils/Video';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../Theme/theme';
import { Route, Switch } from 'react-router-dom';
import HeroVideo from './HeroVideo';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <StApp>
          <Header />
          <Switch>
            <Route exact path='/' component={HeroVideo} />
            <Route path='/video/:id' component={Video} />
          </Switch>
          <Footer />
        </StApp>
      </>
    </ThemeProvider>
  );
}

export default App;

const StApp = styled.div`
  border-radius: 0.5em;
  width: 85%;
  padding: 0;
  margin: 1em auto;
  background-color: #000;
  max-height: 100%;
`;
