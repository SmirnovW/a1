// A component to render a pagination.
import * as React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'components/link/Link';
import { usePagination } from 'hooks/usePagination/usePagination';
import { getTotalPageCount } from 'store/cars/selectors';
import { getQuery } from 'store/query/selectors';

import styles from './Pagination.css';

export const Pagination: React.FC = () => {
  const totalPageCount = useSelector(getTotalPageCount);
  const query = useSelector(getQuery);
  const page = Number(query.page);
  const previousPage = page - 1 < 1 ? 1 : page - 1;
  const nextPage = page + 1 > totalPageCount ? totalPageCount : page + 1;

  const toFirst = usePagination(1);
  const toPrevious = usePagination(previousPage);
  const toNext = usePagination(nextPage);
  const toLast = usePagination(totalPageCount);

  return (
    <ul className={styles.container}>
      <li className={styles.item}>
        <Link to={toFirst} disabled={page === 1}>
          First
        </Link>
      </li>
      <li className={styles.item}>
        <Link to={toPrevious} disabled={page === previousPage}>
          Previous
        </Link>
      </li>
      <li className={styles.item}>
        page {page} of {totalPageCount}
      </li>
      <li className={styles.item}>
        <Link to={toNext} disabled={page === nextPage}>
          Next
        </Link>
      </li>
      <li className={styles.item}>
        <Link to={toLast} disabled={page === totalPageCount}>
          Last
        </Link>
      </li>
    </ul>
  );
};
