// import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import React from 'react';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import CourseList from '../CourseList/CourseList.js';

describe('App Component', () => {
  let wrapper;
  let logOutMock;

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  beforeEach(() => {
    logOutMock = jest.fn();
    wrapper = shallow(<App logOut={logOutMock} />);
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
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
      wrapper = shallow(<App isLoggedIn={true} logOut={logOutMock} />);
    });

    it('should not render the Login component', () => {
      expect(wrapper.find(Login).length).toBe(0);
    });

    it('should render the CourseList component', () => {
      expect(wrapper.find(CourseList).length).toBe(1);
    });
  });

  describe('logout functionality', () => {
    it('should call logOut and show alert when control and h keys are pressed', () => {
      const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
      document.dispatchEvent(event);

      expect(window.alert).toHaveBeenCalledWith('Logging you out');
      expect(logOutMock).toHaveBeenCalled();
    });
  });
});
