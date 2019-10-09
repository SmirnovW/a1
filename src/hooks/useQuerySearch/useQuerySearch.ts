import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useLocation } from 'react-router';
import { push } from 'connected-react-router';

import { setQuery } from 'store/query/actions';
import { getQuery } from 'store/query/selectors';
import { toQueryString } from 'utils/url';
import { InterfaceQuery } from 'store/query/reducer';

export function useQuerySearch(): [
  InterfaceQuery,
  (parameter: { [key: string]: string | number }) => void
] {
  const location = useLocation();
  const dispatch = useDispatch();
  const query: InterfaceQuery = useSelector(getQuery, shallowEqual);

  const set = (parameter: { [key: string]: string | number } = {}): void => {
    dispatch(setQuery(parameter));
    dispatch(
      push(`${location.pathname}?${toQueryString({ ...query, ...parameter })}`)
    );
  };

  return [query, set];
}
