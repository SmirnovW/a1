import * as React from 'react';
import { Link } from 'react-router-dom';

import styles from './CarItem.module.css';

export const CarItem = React.memo(() => {
  return (
    <div className={styles.container}>
      <img height="67" width="80" src="/images/car.svg" alt="" />
      <div className={styles.content}>
        <h5 className={styles.title}>Chrysler Viper</h5>
        <span className={styles.description}>Stock # 6123</span>
        <Link to="#" className={styles.details}>
          View details
        </Link>
      </div>
    </div>
  );
});
