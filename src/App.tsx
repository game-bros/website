import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Blog from './pages/Blog';
import Bros from './pages/Bros';
import Game from './pages/Game';
import Games from './pages/Games';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import { lightTheme } from './theme';

const AppBase = styled.div`
font-size: 1em;

@media ${props => props.theme.mediaQueries.desktop} {
  font-size: 1.3em;
}

@media ${props => props.theme.mediaQueries.xdesktop} {
  font-size: 1.6em;
}
`;

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <AppBase>
          <Switch>
          <Route exact path="/" component={Home} />
            <Route exact path="/games" component={Games} />
            <Route path="/games/:slug" component={Game} />
            <Route exact path="/bros" component={Bros} />
            <Route exact path="/blog" component={Blog} />
            <Route component={PageNotFound} />
          </Switch>
      </AppBase>
    </ThemeProvider>
  );
};

export default App;
