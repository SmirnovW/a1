import { AppStore } from 'store';

import { InterfaceQuery } from './reducer';

export const getQuery = (store: AppStore): InterfaceQuery => store.query;
