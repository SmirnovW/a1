import * as React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import { Footer } from './Footer';

describe('<Footer />', () => {
  it('should render "©Auto1 Group 2019"', () => {
    const component = render(<Footer />);
    expect(component.getByText('© Auto1 Group 2019')).toBeTruthy();
  });
});
