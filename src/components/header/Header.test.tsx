import * as React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import '@testing-library/jest-dom/extend-expect';

import { Header } from './Header';

const renderComponent = (): React.ReactElement => {
  return (
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
};

describe('<Header />', () => {
  it('should render <Logo />', () => {
    const component = render(renderComponent());
    expect(component.getByTestId('logo')).toBeInTheDocument();
  });

  it('should render "My Orders" <Link to="/favorites" />', () => {
    const component = render(renderComponent());
    const link = component.getByText('My Orders');

    expect(link).toBeInTheDocument();
    expect(link.getAttribute('href')).toBe('/favorites');
  });
});
