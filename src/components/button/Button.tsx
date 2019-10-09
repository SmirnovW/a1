// A standard button.
import * as React from 'react';

import styles from './Button.css';

type Props = {
  children: React.ReactNode;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  value?: number | string;
};

export const Button: React.FC<Props> = ({ onClick, value, children }) => {
  return (
    <button
      onClick={onClick}
      value={value}
      className={styles.container}
      type="button"
    >
      {children}
    </button>
  );
};
