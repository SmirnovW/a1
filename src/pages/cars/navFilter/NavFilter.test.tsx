import * as React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { render, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import { configureStore } from 'store';

import { InterfaceManufacturer } from '../../../store/manufacturers/types';

import { NavFilter } from './NavFilter';

jest.mock('store/manufacturers/actions', () => ({
  MANUFACTURERS: {
    FETCH: 'MANUFACTURERS@FETCH'
  },
  fetchManufacturers(): InterfaceAction<{
    data: { manufacturers: Array<InterfaceManufacturer> };
  }> {
    return {
      type: 'MANUFACTURERS@FETCH_FULFILLED',
      payload: {
        data: {
          manufacturers: [{ name: 'BMW', models: [], uuid: 'uuid' }]
        }
      }
    };
  }
}));

jest.mock('store/colors/actions', () => ({
  COLORS: {
    FETCH: 'COLORS@FETCH'
  },
  fetchColors(): InterfaceAction<{ data: { colors: Array<string> } }> {
    return {
      type: 'COLORS@FETCH_FULFILLED',
      payload: {
        data: {
          colors: ['black']
        }
      }
    };
  }
}));

const renderComponent = (state = {}): React.ReactElement => {
  const store = configureStore(state);
  return (
    <Provider store={store}>
      <MemoryRouter>
        <NavFilter />
      </MemoryRouter>
    </Provider>
  );
};

describe('<NavFilter />', () => {
  it('should render "Color" <Label />', () => {
    const component = render(renderComponent());
    expect(component.getByText('Color')).toBeTruthy();
  });

  it('should render colors <Select />', async () => {
    const component = await render(renderComponent());
    expect(component.getAllByText('All car colors').length).toBe(2);
  });

  it('should render "Manufacturer" <Label />', () => {
    const component = render(renderComponent());
    expect(component.getByText('Manufacturer')).toBeInTheDocument();
  });

  it('should render manufacturers <Select />', async () => {
    const component = await render(renderComponent());
    expect(component.getAllByText('All manufacturers').length).toBe(2);
  });

  it('should render "Filter" <Button />', () => {
    const component = render(renderComponent());
    expect(component.getByText('Filter')).toBeInTheDocument();
  });

  it('should change address bar to selected values on "Filter" press', async () => {
    expect(window.location.search).toBe('');

    const component = await render(renderComponent());
    fireEvent.click(component.getByText('black'));
    fireEvent.click(component.getByText('BMW'));
    fireEvent.click(component.getByText('Filter'));

    expect(window.location.search).toBe(
      '?sort=asc&manufacturer=BMW&color=black&page=1'
    );

    fireEvent.click(component.getAllByText('black')[1]);
    fireEvent.click(component.getByText('All manufacturers'));
    fireEvent.click(component.getByText('Filter'));

    expect(window.location.search).toBe(
      '?sort=asc&manufacturer=&color=black&page=1'
    );

    fireEvent.click(component.getByText('All car colors'));
    fireEvent.click(component.getByText('BMW'));
    fireEvent.click(component.getByText('Filter'));

    expect(window.location.search).toBe(
      '?sort=asc&manufacturer=BMW&color=&page=1'
    );

    fireEvent.click(component.getAllByText('All car colors')[1]);
    fireEvent.click(component.getByText('All manufacturers'));
    fireEvent.click(component.getByText('Filter'));

    expect(window.location.search).toBe(
      '?sort=asc&manufacturer=&color=&page=1'
    );
  });
});
