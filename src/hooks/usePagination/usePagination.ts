import { useLocation } from 'react-router-dom';

import { useQuerySearch } from 'hooks/useQuerySearch/useQuerySearch';
import { toQueryString } from 'utils/url';

export function usePagination(page: number): string {
  const location = useLocation();
  const [query] = useQuerySearch();

  return `${location.pathname}?${toQueryString({ ...query, page })}`;
}
