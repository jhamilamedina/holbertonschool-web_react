import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { shallow } from 'enzyme';
import Notifications from "./Notifications";

test("render without crashing", () => {
  shallow(<Notifications />);
});

test('renders three list items', () => {
  shallow(<Notifications />);
  const listItems = screen.getAllByRole('listitem');
  expect(listItems).toHaveLength(3);
});

test('renders the text "Here is the list of notifications"', () => {
  shallow(<Notifications />);
  const paragraphElement = screen.getByText('Here is the list of notifications');
  expect(paragraphElement).toBeInTheDocument();
  
});