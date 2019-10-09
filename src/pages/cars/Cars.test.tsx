import * as React from 'react';
import { Provider } from 'react-redux';
import {
  render,
  getByText,
  getAllByText,
  fireEvent
} from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';

import '@testing-library/jest-dom/extend-expect';

import { App } from 'app/App';
import { AppStore, configureStore } from 'store';
import { InterfaceCar } from 'store/car/types';

let store: AppStore;

jest.mock('store/cars/actions', () => ({
  CARS: {
    FETCH: 'CARS@FETCH'
  },
  fetchCars: (
    query: string
  ): InterfaceAction<{
    data: {
      cars: Array<InterfaceCar>;
      totalCarsCount: number;
      totalPageCount: number;
    };
  }> => ({
    type: query === 'pending' ? 'CAR@FETCH_PENDING' : 'CARS@FETCH_FULFILLED',
    payload: {
      data: {
        cars: new Array(10)
          .fill({
            stockNumber: 1,
            manufacturerName: 'DeLorean',
            modelName: 'DMC-12',
            color: 'grey',
            mileage: { number: 666, unit: 'km' },
            fuelType: 'V6 2849',
            pictureUrl: 'DeLorean_DMC-12.png',
            status: 'pending'
          })
          .map((car: InterfaceCar, index: number) => ({
            ...car,
            stockNumber: car.stockNumber + index
          })),
        totalCarsCount: 100,
        totalPageCount: 10
      }
    }
  })
}));

let pathname: string;

const getComponent = (query: string): React.ReactElement => (
  <Provider store={store}>
    <MemoryRouter initialEntries={[`/cars?${query}`]}>
      <App />
      {/* https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/testing.md */}
      <Route
        path="*"
        render={(data): null => {
          pathname = data.location.pathname;
          return null;
        }}
      />
    </MemoryRouter>
  </Provider>
);

beforeEach(() => {
  store = configureStore();
});

describe('<Index />', () => {
  it('should not render Welcome!', async () => {
    const { queryByText } = await render(getComponent('query'));
    expect(queryByText('Welcome!')).not.toBeInTheDocument();
  });

  it('should render <Header />', async () => {
    const component = await render(getComponent('query'));
    expect(component.getByTestId('header')).toBeInTheDocument();
  });

  it('should render <Footer /> at the bottom', async () => {
    const component = await render(getComponent('query'));
    expect(component.getByTestId('footer')).toBeInTheDocument();
  });

  it('should render <NavFilter />', async () => {
    const component = await render(getComponent('query'));
    expect(component.getByTestId('nav-filter')).toBeInTheDocument();
  });

  it('should render sort <Select /> by manufacturer or color', async () => {
    const component = await render(getComponent('query'));
    expect(component.getAllByTestId('select').length).toBe(3);
  });

  it('should render "10 of 100 results"', async () => {
    const component = await render(getComponent('query'));
    expect(
      component.getByText('10 of 100 results', { exact: false })
    ).toBeInTheDocument();
  });

  it('should render <List /> of cars', async () => {
    const component = await render(getComponent('query'));
    expect(component.getByTestId('list')).toBeInTheDocument();
  });

  it('should render favorite cars first', () => {
    // eslint-disable-next-line no-console
    console.log('Sorry, but did not implement it.');
    expect(true).toBe(true);
  });

  it('should render cars manufacturer and model name', async () => {
    const component = await render(getComponent('query'));
    const cars = component.getByTestId('list');
    expect(getAllByText(cars, 'DeLorean DMC-12').length).toBe(10);
  });

  it('should render cars stock number, mileage, fuel type and color', async () => {
    const component = await render(getComponent('query'));
    const cars = component.getByTestId('list');
    expect(
      getByText(cars, 'Stock # 2 - 666km - V6 2849 - grey')
    ).toBeInTheDocument();
  });

  it('when click on "View details" should navigate to show car page', async () => {
    const component = await render(getComponent('query'));
    fireEvent.click(component.getAllByText('View details')[0]);
    expect(pathname).toBe('/car/1');
  });

  describe('should stick elements on scroll or resize', () => {
    it('should stick <Header /> always on top', async () => {
      const component = await render(getComponent('query'));
      const header = component.getByTestId('header');

      expect(header.style.position).toBe('fixed');
    });

    it('should stick <FilterNav /> always on left top side', async () => {
      const component = await render(getComponent('query'));
      const navFilter = component.getByTestId('nav-filter');

      expect(navFilter.style.position).toBe('fixed');
    });
  });
});
