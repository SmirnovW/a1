import * as React from 'react';

import { Select, SelectItem } from 'components/select';
import { useQuerySearch } from 'hooks/useQuerySearch/useQuerySearch';

import styles from './NavSorting.css';

export const NavSorting: React.FC = React.memo(() => {
  const [, setQuery] = useQuerySearch();

  const doSearch = (value: string | number, name: string): void => {
    setQuery({ [name]: value });
  };

  return (
    <div className={styles.container}>
      <Select onClick={doSearch} title="Sort by" name="sort">
        <SelectItem value="none">None</SelectItem>
        <SelectItem value="asc">Lowest mileage</SelectItem>
        <SelectItem value="desc">Highest mileage</SelectItem>
      </Select>
    </div>
  );
});
