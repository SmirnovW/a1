import * as React from 'react';

import { Select, SelectItem } from 'components/select';
import { Button } from 'components/button/Button';

import styles from './NavFilter.module.css';

type Props = {
  children: React.ReactNode;
};

export const NavFilter: React.FC<Props> = props => {
  return (
    <div className={styles.container}>
      <Select onClick={data => console.log(data)} title="Sort by">
        <SelectItem value={1}>Skoda</SelectItem>
        <SelectItem selected value={2}>
          Volvo
        </SelectItem>
        <SelectItem value={3}>BMV</SelectItem>
      </Select>
      <Select onClick={data => console.log(data)} title="Sort by">
        <SelectItem value={1}>Skoda</SelectItem>
        <SelectItem selected value={2}>
          Volvo
        </SelectItem>
        <SelectItem value={3}>BMV</SelectItem>
      </Select>
      <Button>Filter</Button>
    </div>
  );
};
