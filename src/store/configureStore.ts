import { createStore, applyMiddleware, Store } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { createRootReducer } from './createRootReducer';

const history = createBrowserHistory();
const rootReducer = createRootReducer(history);

function configureStore(preloadedState: AppStore = {}): Store {
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(promise, routerMiddleware(history)))
  );
}

export type AppStore = ReturnType<typeof rootReducer>;

export { configureStore, history };
