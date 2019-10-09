import * as React from 'react';
import { useDispatch } from 'react-redux';

import { List } from 'pages/cars/list/List';
import { NavFilter } from 'pages/cars/navFilter/NavFilter';
import { useQuerySearch } from 'hooks/useQuerySearch/useQuerySearch';
import { fetchCars } from 'store/cars/actions';
import { toQueryString } from 'utils/url';

import styles from './Cars.css';

export const Cars: React.FC = () => {
  const [query] = useQuerySearch();
  const queryString = toQueryString(query);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCars(queryString));
  }, [queryString]);

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <NavFilter />
      </aside>
      <main className={styles.main}>
        <List />
      </main>
    </div>
  );
};
