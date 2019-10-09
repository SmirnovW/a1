import * as React from 'react';

import { InterfaceManufacturer } from 'store/manufacturers/types';
import { Select, SelectItem } from 'components/select';
import { Button } from 'components/button/Button';
import { useQuerySearch } from 'hooks/useQuerySearch/useQuerySearch';
import { useColors } from 'hooks/useColors/useColors';
import { useManufacturers } from 'hooks/useManufacturers/useManufacturers';

import styles from './NavFilter.css';

export const NavFilter: React.FC = React.memo(() => {
  const manufacturers: Array<InterfaceManufacturer> = useManufacturers();
  const colors: Array<string> = useColors();
  const [query, setQuery] = useQuerySearch();

  const filters: { [key: string]: string } = {};

  const setFilter = (value: string, name: string): void => {
    filters[name] = value === 'all' ? '' : value;
  };

  const doSearch = (): void => {
    setQuery({ ...filters, page: 1 });
  };

  return (
    <div
      className={styles.container}
      data-testid="nav-filter"
      style={{ position: 'fixed' }}
    >
      <Select onClick={setFilter} title="Color" name="color">
        <SelectItem value="all" selected={query.color === ''}>
          All car colors
        </SelectItem>
        <>
          {colors.map(color => (
            <SelectItem
              key={color}
              value={color}
              selected={query.color === color}
            >
              {color}
            </SelectItem>
          ))}
        </>
      </Select>
      <Select onClick={setFilter} title="Manufacturer" name="manufacturer">
        <SelectItem value="all" selected={query.manufacturer === ''}>
          All manufacturers
        </SelectItem>
        <>
          {manufacturers.map(manufacturer => (
            <SelectItem
              key={manufacturer.name}
              value={manufacturer.name}
              selected={query.manufacturer === manufacturer.name}
            >
              {manufacturer.name}
            </SelectItem>
          ))}
        </>
      </Select>
      <footer className={styles.footer}>
        <Button onClick={doSearch}>Filter</Button>
      </footer>
    </div>
  );
});
