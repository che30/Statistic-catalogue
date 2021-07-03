import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './component/App';
import MovieDetails from './component/MovieDetails';

const Routes = () => (
  <main>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/MovieDetails" component={MovieDetails} />
    </Switch>
  </main>
);
export default Routes;
