import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { shallow } from 'enzyme';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('renders a div with class App-header', () => {
  render(<App />);
  const appHeader = screen.getByText('School dashboard');
  expect(appHeader).toBeInTheDocument();
});

test('renders a div with class App-body', () => {
  render(<App />);
  const appBody = screen.getByText('Login to access the full dashboard');
  expect(appBody).toBeInTheDocument();
});

test('renders a div with class App-footer', () => {
  render(<App />);
  const appFooter = screen.getByText(/Copyright 2024 - Holberton School/);
  expect(appFooter).toBeInTheDocument();
});