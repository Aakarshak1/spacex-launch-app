import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Year, Launch, Landing } from '../../components/Filters/Filter';

it('should render year componet', () => {
  const { getByText } = render(<Year />);
  const year = getByText(/2006/i);
  expect(year.textContent).toBe('2006');
});

it('should have active class when given year is passed', () => {
  const { getByTestId } = render(<Year year="2020" />);
  const year = getByTestId(/2020/i);
  expect(year.firstChild).toHaveClass('active');
  expect(year.firstChild.textContent).toBe('2020');
});

it('should render Launch Component', () => {
  const { getByText } = render(<Launch />);

  const launch = getByText('Successfull Launch');
  const truetext = getByText('True');

  expect(launch).toBeInTheDocument();
  expect(truetext).toBeInTheDocument();
});

it('should render Lending component', () => {
  const { getByText } = render(<Landing />);

  const landing = getByText('Successfull Landing');
  const truetext = getByText('True');

  expect(landing).toBeInTheDocument();
  expect(truetext).toBeInTheDocument();
});
