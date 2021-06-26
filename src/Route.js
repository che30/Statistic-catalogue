import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './component/App';
import movieDetails from './component/movieDetails';

const Routes = () => (
  <main>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/movieDetails" component={movieDetails} />
    </Switch>
  </main>
);
export default Routes;
