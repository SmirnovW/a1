import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useEffect } from 'react';

import { getManufacturers } from 'store/manufacturers/selectors';
import { fetchManufacturers } from 'store/manufacturers/actions';
import { InterfaceManufacturer } from 'store/manufacturers/types';

export function useManufacturers(): Array<InterfaceManufacturer> {
  const dispatch = useDispatch();
  const manufacturers = useSelector(getManufacturers, shallowEqual);

  useEffect(() => {
    dispatch(fetchManufacturers());
  }, []);

  return manufacturers;
}
