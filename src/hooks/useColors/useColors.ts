import { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { fetchColors } from 'store/colors/actions';
import { getColors } from 'store/colors/selectors';

export function useColors(): Array<string> {
  const dispatch = useDispatch();
  const colors = useSelector(getColors, shallowEqual);

  useEffect(() => {
    dispatch(fetchColors());
  }, []);

  return colors;
}
