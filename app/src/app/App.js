import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Footer, Header, AppLayout } from '../genericComponents';
import { AppsList, InfoPage } from '../views';

export const App = () => (
  <AppLayout>
    <Header />
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/games" />
        </Route>
        <Route exact path="/games" component={AppsList} />
        <Route exact path="/app/:appId" component={InfoPage} />
      </Switch>
    </Router>
    <Footer />
  </AppLayout>
);
