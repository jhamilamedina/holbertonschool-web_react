import React from 'react';
import { shallow, mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('WithLogging HOC', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should log to console on mount and unmount with "Component" when the wrapped element is pure HTML', () => {
    const TestComponent = WithLogging(() => <p />);
    const wrapper = mount(<TestComponent />);

    expect(consoleSpy).toHaveBeenCalledWith('Component Component is mounted');
    
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is going to unmount');
  });

  it('should log to console on mount and unmount with the name of the component when the wrapped element is the Login component', () => {
    const TestComponent = WithLogging(Login);
    const wrapper = mount(<TestComponent />);

    expect(consoleSpy).toHaveBeenCalledWith('Component Login is mounted');

    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});
