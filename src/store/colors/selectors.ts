import { AppStore } from 'store';

export const getColors = (store: AppStore): Array<string> => store.colors.items;
