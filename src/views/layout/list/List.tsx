// Component which renders list of items, e.g. car list
import * as React from 'react';

import { CarItem } from 'components/carItem/CarItem';
import { Select, SelectItem } from 'components/select';

import styles from './List.module.css';

export const List = React.memo(() => {
  return (
    <div>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}> Available cars</h1>
          <span className={styles.results}>Showing 10 of 100 results</span>
        </div>
        <div className={styles.sort}>
          <Select onClick={data => console.log(data)} title="Sort by">
            <SelectItem value={1}>Skoda</SelectItem>
            <SelectItem selected value={2}>
              Volvo
            </SelectItem>
            <SelectItem value={3}>BMV</SelectItem>
          </Select>
        </div>
      </header>
      <ul className={styles.list}>
        <li className={styles.item}>
          <CarItem />
        </li>
        <li className={styles.item}>
          <CarItem />
        </li>
        <li className={styles.item}>
          <CarItem />
        </li>
      </ul>
    </div>
  );
});
