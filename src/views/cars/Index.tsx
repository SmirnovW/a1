import * as React from 'react';
import axios from 'axios';

import { List } from 'views/layout/list/List';
import { NavFilter } from 'views/layout/navFilter/NavFilter';
import { ContextData } from 'components/select/context.d';

import styles from './Index.module.css';

async function getCars() {
  const cars = await axios.get('/api/cars');
  console.log('cars', cars);
}

getCars();

export const Index = () => {
  const onClick = (value: React.ReactNode) => {
    console.log('value', value);
  };

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
