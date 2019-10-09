import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { InterfaceCar } from 'store/car/types';
import {
  getCar,
  isRejected as isRejectedSelector,
  isLoading as isLoadingSelector
} from 'store/car/selectors';
import { fetchCar } from 'store/car/actions';
import { Button } from 'components/button/Button';
import { useFavorites } from 'hooks/useFavorites/useFavorites';
import { Page404 } from 'pages/page404/Page404';

import styles from './Car.css';

export const Car: React.FC<RouteComponentProps<{ id: string }>> = React.memo(
  props => {
    const car: InterfaceCar = useSelector(getCar);
    const isLoading: boolean = useSelector(isLoadingSelector);
    const isRejected: boolean = useSelector(isRejectedSelector);
    const dispatch = useDispatch();
    const [inFavoriteList, addFavorite, removeFavorite] = useFavorites(
      Number(props.match.params.id)
    );

    React.useEffect(() => {
      dispatch(fetchCar(props.match.params.id));
    }, []);

    const toggleFavorite = (): void => {
      if (inFavoriteList) {
        removeFavorite();
      } else {
        addFavorite();
      }
    };

    if (isRejected) return <Page404 />;

    if (isLoading) return null;

    return (
      <main className={styles.container} data-testid="car-page">
        <div className={styles.preview} />
        <div className={styles.content}>
          <section className={styles.details}>
            <article>
              <h1 className={styles.title}>
                {car.manufacturerName} {car.modelName}
              </h1>
              <p className={styles.meta}>
                Stock # {car.stockNumber} - {car.mileage.number}{' '}
                {car.mileage.unit} - {car.fuelType} - {car.color}
              </p>
              <p className={styles.description}>
                This car is currently available and can be delivered as soon as
                <br />
                tomorrow morning. Please be aware that delivery times shown in
                <br />
                this page are not definitive and may change due to bad weather
                <br />
                conditions.
              </p>
            </article>
          </section>
          <section className={styles.favoriteWidget}>
            If you like this car, click the button and save it in your
            collection of favourite items.
            <Button onClick={toggleFavorite}>
              {inFavoriteList ? 'Remove' : 'Save'}
            </Button>
          </section>
        </div>
      </main>
    );
  }
);
