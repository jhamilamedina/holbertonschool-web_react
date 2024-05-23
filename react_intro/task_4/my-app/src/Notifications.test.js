import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Notifications from "./Notifications";

test("render without crashing", () => {
  render(<Notifications />);
});

test('renders three list items', () => {
  render(<Notifications />);
  const listItems = screen.getAllByRole('listitem');
  expect(listItems).toHaveLength(3);
});

test('renders the text "Here is the list of notifications"', () => {
  render(<Notifications />);
  const paragraphElement = screen.getByText('Here is the list of notifications');
  expect(paragraphElement).toBeInTheDocument();
  
});