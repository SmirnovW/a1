import * as React from 'react';
import { Link } from 'react-router-dom';

import { InterfaceCar } from 'store/car/types';

import styles from './Item.css';

export const Item: React.FC<InterfaceCar> = React.memo(props => {
  return (
    <div className={styles.container}>
      <img
        height="67"
        width="80"
        src={props.pictureUrl}
        alt={props.modelName}
      />
      <div className={styles.content}>
        <h5 className={styles.title}>
          {props.manufacturerName} {props.modelName}
        </h5>
        <span className={styles.description}>
          Stock # {props.stockNumber} - {props.mileage.number}
          {props.mileage.unit} - {props.fuelType} - {props.color}
        </span>
        <Link to={`/car/${props.stockNumber}`} className={styles.details}>
          View details
        </Link>
      </div>
    </div>
  );
});
