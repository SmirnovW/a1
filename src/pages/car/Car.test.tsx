import * as React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import '@testing-library/jest-dom/extend-expect';

import { App } from 'app/App';
import { AppStore, configureStore } from 'store';
import { InterfaceCar } from 'store/car/types';

let store: AppStore;

jest.mock('store/car/actions', () => ({
  CAR: {
    FETCH: 'CAR@FETCH'
  },
  fetchCar: (id: string): InterfaceAction<{ data: { car: InterfaceCar } }> => ({
    type: id === '23' ? 'CAR@FETCH_FULFILLED' : 'CAR@FETCH_REJECTED',
    payload: {
      data: {
        car: {
          stockNumber: 23,
          manufacturerName: 'DeLorean',
          modelName: 'DMC-12',
          color: 'grey',
          mileage: { number: 666, unit: 'km' },
          fuelType: 'V6 2849',
          pictureUrl: 'DeLorean_DMC-12.png',
          status: 'pending'
        }
      }
    }
  })
}));

const getComponent = (id: string): React.ReactElement => (
  <Provider store={store}>
    <MemoryRouter initialEntries={[`/car/${id}`]} initialIndex={0}>
      <App />
    </MemoryRouter>
  </Provider>
);

beforeEach(() => {
  store = configureStore();
});

describe('<Car />', () => {
  it('should redeirect to 404 if car is not found', async () => {
    const { getByText } = await render(getComponent('666'));

    expect(getByText('404 - Not Found')).toBeInTheDocument();
  });

  it('should render car manufacturer name', async () => {
    const { getByText } = await render(getComponent('23'));
    expect(getByText('DeLorean', { exact: false })).toBeInTheDocument();
  });

  it('should render car model name', async () => {
    const { getByText } = await render(getComponent('23'));
    expect(getByText('DMC-12', { exact: false })).toBeInTheDocument();
  });

  it('should render car stock number', async () => {
    const { getByText } = await render(getComponent('23'));
    expect(
      getByText('Stock # 23 - 666 km - V6 2849 - grey')
    ).toBeInTheDocument();
  });

  it('should render car mileage', async () => {
    const { getByText } = await render(getComponent('23'));
    expect(getByText('666', { exact: false })).toBeInTheDocument();
  });

  it('should render car fule type', async () => {
    const { getByText } = await render(getComponent('23'));
    expect(getByText('V6 2849', { exact: false })).toBeInTheDocument();
  });

  it('should render car color', async () => {
    const { getByText } = await render(getComponent('23'));
    expect(getByText('grey', { exact: false })).toBeInTheDocument();
  });

  it('should render "Save" favorites <Button />', async () => {
    const { getByText } = await render(getComponent('23'));
    expect(getByText('Save')).toBeInTheDocument();
  });
});
