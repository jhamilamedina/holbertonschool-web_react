// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import { TextEncoder } from 'util';

configure({ adapter: new Adapter() });

// Mock the window.alert function
// global.alert = jest.fn();

// Polyfill for TextEncoder
// if (typeof TextEncoder === 'undefined') {
  // const { TextEncoder } = require('util');
  // global.TextEncoder = TextEncoder;
// }
