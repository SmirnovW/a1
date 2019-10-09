import { combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import car from 'store/car/reducer';
import cars from 'store/cars/reducer';
import colors from 'store/colors/reducer';
import query from 'store/query/reducer';
import manufacturers from 'store/manufacturers/reducer';

export const createRootReducer = (history: History): Reducer =>
  combineReducers({
    car,
    cars,
    colors,
    manufacturers,
    query,
    router: connectRouter(history)
  });
