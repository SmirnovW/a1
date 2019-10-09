import * as React from 'react';

import styles from './Placeholder.css';

export const Placeholder = React.memo(() => {
  return (
    <div className={styles.container}>
      <div className={styles.image} />
      <div className={styles.content}>
        <span className={styles.title} />
        <span className={styles.description} />
        <span className={styles.details} />
      </div>
    </div>
  );
});
