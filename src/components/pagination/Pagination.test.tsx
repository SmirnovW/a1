import * as React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import { configureStore } from 'store';
import { defaultState as queryState } from 'store/query/reducer';
import { initialState as carsState } from 'store/cars/reducer';

import { Pagination } from './Pagination';

const renderComponent = (state = {}): React.ReactElement => {
  const store = configureStore(state);
  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={['/cars']}>
        <Pagination />
      </MemoryRouter>
    </Provider>
  );
};

describe('<Pagination />', () => {
  it('should render "First" page link', () => {
    const component = render(renderComponent());
    expect(component.getByText('First')).toBeInTheDocument();
  });

  it('should render "Previous" page link', () => {
    const component = render(renderComponent());
    expect(component.getByText('Previous')).toBeInTheDocument();
  });

  it('should render "Page 2 of 10"', () => {
    const component = render(
      renderComponent({
        query: { ...queryState, page: 2 },
        cars: { ...carsState, totalPageCount: 10 }
      })
    );
    expect(component.getByText('page 2 of 10')).toBeInTheDocument();
  });

  it('should render "Next" page link', () => {
    const component = render(renderComponent());
    expect(component.getByText('Next')).toBeInTheDocument();
  });

  it('should render "Last" page link', () => {
    const component = render(renderComponent());
    expect(component.getByText('Last')).toBeInTheDocument();
  });

  describe('on first page', () => {
    it('should disable "First" page link', () => {
      const component = render(renderComponent());
      const link = component.getByText('First');
      expect(link.className).toContain('disabled');
    });

    it('should disable "Previous" page link', () => {
      const component = render(renderComponent());
      const link = component.getByText('Previous');
      expect(link.className).toContain('disabled');
    });

    it('should enable "Next" page link', () => {
      const component = render(renderComponent());
      const link = component.getByText('Next');
      expect(link.className).not.toContain('disabled');
    });
  });

  describe('on not last page and not first page', () => {
    it('should enable "First" page link', () => {
      const component = render(
        renderComponent({
          query: { ...queryState, page: 2 },
          cars: { ...carsState, totalPageCount: 10 }
        })
      );
      const link = component.getByText('First');
      expect(link.className).not.toContain('disabled');
    });

    it('should enable "Previous" page link', () => {
      const component = render(
        renderComponent({
          query: { ...queryState, page: 2 },
          cars: { ...carsState, totalPageCount: 10 }
        })
      );
      const link = component.getByText('Previous');
      expect(link.className).not.toContain('disabled');
    });

    it('should enable "Next" page link', () => {
      const component = render(
        renderComponent({
          query: { ...queryState, page: 2 },
          cars: { ...carsState, totalPageCount: 10 }
        })
      );
      const link = component.getByText('Next');
      expect(link.className).not.toContain('disabled');
    });

    it('should enable "Last" page link', () => {
      const component = render(
        renderComponent({
          query: { ...queryState, page: 2 },
          cars: { ...carsState, totalPageCount: 10 }
        })
      );
      const link = component.getByText('Last');
      expect(link.className).not.toContain('disabled');
    });
  });

  describe('on last page', () => {
    it('should disable "Next" page link', () => {
      const component = render(
        renderComponent({
          query: { ...queryState, page: 10 },
          cars: { ...carsState, totalPageCount: 10 }
        })
      );
      const link = component.getByText('Next');
      expect(link.className).toContain('disabled');
    });

    it('should disable "Last" page link', () => {
      const component = render(
        renderComponent({
          query: { ...queryState, page: 10 },
          cars: { ...carsState, totalPageCount: 10 }
        })
      );
      const link = component.getByText('Last');
      expect(link.className).toContain('disabled');
    });
  });
});
