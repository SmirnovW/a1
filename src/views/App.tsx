import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Header } from 'views/layout/header/Header';

import { Index as Cars } from 'views/cars/Index';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Cars />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
