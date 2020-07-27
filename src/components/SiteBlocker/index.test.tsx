import React from 'react';
import SiteBlocker from '.';
import { render } from '@testing-library/react';

it('renders without errors', () => {
  const component = render(<SiteBlocker />);
  expect(component.getByTestId('site-blocker')).toBeTruthy();
});
