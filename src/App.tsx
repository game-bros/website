import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Blog from './pages/Blog';
import Bros from './pages/Bros';
import Game from './pages/Game';
import Games from './pages/Games';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/games" component={Games} />
        <Route path="/games/:slug" component={Game} />
        <Route exact path="/bros" component={Bros} />
        <Route exact path="/blog" component={Blog} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
