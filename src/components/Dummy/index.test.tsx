import React from 'react';
import Dummy from './index';
import { render } from '@testing-library/react';

it('renders without errors', () => {
  const component = render(<Dummy />);
  expect(component.getByTestId('dummy')).toBeTruthy();
});
