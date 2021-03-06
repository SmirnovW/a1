import * as React from 'react';
import { Link } from 'react-router-dom';

import { Logo } from 'components/logo/Logo';

import styles from './Header.css';

export const Header = React.memo(() => {
  return (
    <header
      className={styles.container}
      data-testid="header"
      style={{ position: 'fixed' }}
    >
      <Logo />
      <nav>
        <ul className={styles.navigation}>
          <li className={styles.navigationItem}>
            <Link className={styles.navigationLink} to="/cart">
              Purchase
            </Link>
          </li>
          <li className={styles.navigationItem}>
            <Link className={styles.navigationLink} to="/favorites">
              My Orders
            </Link>
          </li>
          <li className={styles.navigationItem}>
            <Link className={styles.navigationLink} to="/sell">
              Sell
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});
