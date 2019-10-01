// A standard button.
import * as React from 'react';

import styles from './Button.module.css';

type Props = {
  children: React.ReactNode;
};

export const Button: React.FC<Props> = props => {
  return <button className={styles.container}>{props.children}</button>;
};
