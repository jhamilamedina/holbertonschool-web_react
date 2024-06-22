// import { render, screen } from '@testing-library/react';
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import CourseList from '../CourseList/CourseList.js';

// Mock the alert function globally
global.alert = jest.fn();

describe('App Component', () => {
  let wrapper;
  let mockLogOut;

  beforeEach(() => {
    mockLogOut = jest.fn();
    wrapper = shallow(<App logOut={mockLogOut} />);
  });

  it('should render without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should contain the Notifications component', () => {
    expect(wrapper.find(Notifications).length).toBe(1);
  });

  it('should contain the Header component', () => {
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('should contain the Login component', () => {
    expect(wrapper.find(Login).length).toBe(1);
  });

  it('should contain the Footer component', () => {
    expect(wrapper.find(Footer).length).toBe(1);
  });

  it('should not contain the CourseList component when isLoggedIn is false', () => {
    expect(wrapper.find(CourseList).length).toBe(0);
  });

  describe('when isLoggedIn is true', () => {
    beforeEach(() => {
      wrapper = shallow(<App isLoggedIn={true} />);
    });

    it('should not render the Login component', () => {
      expect(wrapper.find(Login).length).toBe(0);
    });

    it('should render the CourseList component', () => {
      expect(wrapper.find(CourseList).length).toBe(1);
    });
  });

  describe('logOut functionality', () => {
    it('should call logOut and alert with correct message when control and h are pressed', () => {
      // Simulate keydown event for Control+H
      const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
      document.dispatchEvent(event);

      // Assertions
      expect(mockLogOut).toHaveBeenCalled();
      expect(global.alert).toHaveBeenCalledWith('Logging you out');
    });
  });
});
