import * as React from 'react';

import { Link } from 'components/link/Link';
import { Logo } from 'components/logo/Logo';

import styles from './Page404.css';

export const Page404 = React.memo(() => {
  return (
    <div className={styles.container}>
      <Logo />
      <h1 className={styles.title}>404 - Not Found</h1>
      <p className={styles.text}>
        Sorry, the page you are looking for does not exist.
      </p>
      <p>
        You can always go back to the <Link to="/cars">homepage.</Link>
      </p>
    </div>
  );
});
