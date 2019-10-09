import * as React from 'react';

import styles from './Footer.css';

export const Footer = React.memo(() => {
  return (
    <footer className={styles.container} data-testid="footer">
      © Auto1 Group {new Date().getFullYear()}
    </footer>
  );
});
