import * as React from 'react';
import { Switch, Route, withRouter, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import { Header } from 'components/header/Header';
import { Footer } from 'components/footer/Footer';
import { Page404 } from 'pages/page404/Page404';
import { Cars } from 'pages/cars/Cars';
import { Car } from 'pages/car/Car';

import styles from './App.css';

import 'css/variables.css';
import 'css/base.css';
import 'normalize.css';

export const App = withRouter(() => {
  const location = useLocation();
  const transitions = useTransition(
    location,
    currentlocation => currentlocation.pathname,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 }
    }
  );

  return (
    <>
      <Header />
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props} className={styles.container}>
          <Switch location={item}>
            <Route path="/cars">
              <Cars />
            </Route>
            <Route path="/car/:id" component={Car} />
            <Route>
              <Page404 />
            </Route>
          </Switch>
        </animated.div>
      ))}
      <Footer />
    </>
  );
});
