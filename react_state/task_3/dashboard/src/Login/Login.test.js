import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import React from 'react';
import Login from './Login';

describe('Login Component', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('renders 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').length).toBe(2);
    expect(wrapper.find('label').length).toBe(2);
  });

  it('submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(true);
  });

  it('submit button is enabled after changing input values', () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find('input[type="email"]');
    const passwordInput = wrapper.find('input[type="password"]');
    const submitButton = wrapper.find('input[type="submit"]');

    // Simulate changing email input
    emailInput.simulate('change', { target: { value: 'test@example.com' } });
    // Simulate changing password input
    passwordInput.simulate('change', { target: { value: 'password123' } });

    // Re-fetch submit button after state update
    const updatedSubmitButton = wrapper.find('input[type="submit"]');
    expect(updatedSubmitButton.prop('disabled')).toBe(false);
  });
});
