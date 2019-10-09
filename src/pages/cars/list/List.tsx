// Component which renders list of items, e.g. car list
import * as React from 'react';
import { useSelector } from 'react-redux';

import { InterfaceCar } from 'store/car/types';
import { Item } from 'pages/cars/item/Item';
import { NavSorting } from 'pages/cars/navSorting/NavSorting';
import { Pagination } from 'components/pagination/Pagination';
import { Placeholder } from 'pages/cars/item/placeholder/Placeholder';
import {
  getCars,
  getCarsCount,
  isLoading as isLoadingSelector
} from 'store/cars/selectors';

import styles from './List.css';

const carsMock = new Array(10)
  .fill('car')
  .map((item: string, index: number) => `${item} ${index}`);

export const List: React.FC = React.memo(() => {
  const cars = useSelector(getCars);
  const carsCount = useSelector(getCarsCount);
  const isLoading = useSelector(isLoadingSelector);

  return (
    <>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}> Available cars</h1>
          <span className={styles.results}>
            Showing {cars.length} of {carsCount} results
          </span>
        </div>
        <NavSorting />
      </header>
      <ul className={styles.list} data-testid="list">
        {isLoading
          ? carsMock.map((car: string) => (
              <li key={car} className={styles.item}>
                <Placeholder />
              </li>
            ))
          : cars.map((car: InterfaceCar) => (
              <li key={car.stockNumber} className={styles.item}>
                <Item {...car} />
              </li>
            ))}
      </ul>
      <footer>
        <Pagination />
      </footer>
    </>
  );
});
