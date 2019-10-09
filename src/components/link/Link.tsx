import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import classNames from 'classnames';

import styles from './Link.css';

type Props = {
  children: React.ReactNode;
  to: string;
  disabled?: boolean;
};

export const Link: React.FC<Props> = React.memo(
  ({ to, children, disabled = false }) => (
    <RouterLink
      to={to}
      className={classNames(styles.container, { [styles.disabled]: disabled })}
    >
      {children}
    </RouterLink>
  )
);
