import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders card number input field', () => {
  render(<App />);
  const element = screen.getByText(/Card Number/);
  expect(element).toBeInTheDocument();
});

test('valid card number sets is-valid class', () => {
  const { container } = render(<App />);

  const formControl = container.querySelector('#formCardNumber');
  expect(formControl).toBeInTheDocument();
  fireEvent.change(formControl!, {target: {value: '5454545454545454'}})

  const primaryButton = screen.getByRole('button', { name: /Validate/i })
  fireEvent.click(primaryButton)

  expect(formControl).toHaveClass('is-valid')
});

test('invalid card number sets is-invalid class', () => {
  const { container } = render(<App />);

  const formControl = container.querySelector('#formCardNumber');
  expect(formControl).toBeInTheDocument();
  fireEvent.change(formControl!, {target: {value: '5454545454545450'}})

  const primaryButton = screen.getByRole('button', { name: /Validate/i })
  fireEvent.click(primaryButton)

  expect(formControl).toHaveClass('is-invalid')
});