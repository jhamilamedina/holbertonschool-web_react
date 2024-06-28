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

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  beforeEach(() => {
    wrapper = shallow(<App />);
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
      wrapper.setState({
        user: {
          email: 'test@example.com',
          password: '',
          isLoggedIn: true,
        },
      });
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
      expect(wrapper.state('user').isLoggedIn).toBe(false);
    });
  });

  describe('logIn function', () => {
    it('should update the state correctly when calling logIn', () => {
      wrapper.instance().logIn('test@example.com', 'password');
      expect(wrapper.state('user')).toEqual({
        email: 'test@example.com',
        password: 'password',
        isLoggedIn: true,
      });
    });
  });

  describe('logOut function', () => {
    it('should update the state correctly when calling logOut', () => {
      wrapper.setState({
        user: {
          email: 'test@example.com',
          password: '',
          isLoggedIn: true,
        },
      });
      wrapper.instance().logOut();
      expect(wrapper.state('user')).toEqual({
        email: '',
        password: '',
        isLoggedIn: false,
      });
    });
  });

  describe('drawer functionality', () => {
    it('should have default state displayDrawer as false', () => {
      expect(wrapper.state('displayDrawer')).toBe(false);
    });

    it('should update displayDrawer state to true after calling handleDisplayDrawer', () => {
      wrapper.instance().handleDisplayDrawer();
      expect(wrapper.state('displayDrawer')).toBe(true);
    });

    it('should update displayDrawer state to false after calling handleHideDrawer', () => {
      wrapper.setState({ displayDrawer: true }); // Simulate drawer being active
      wrapper.instance().handleHideDrawer();
      expect(wrapper.state('displayDrawer')).toBe(false);
    });
  });

  describe('markNotificationAsRead function', () => {
    it('should mark a notification as read', () => {
      const initialNotifications = [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
      ];

      wrapper.setState({ listNotifications: initialNotifications });
      wrapper.instance().markNotificationAsRead(2); // Mark notification with id 2 as read

      expect(wrapper.state('listNotifications')).toEqual([
        { id: 1, type: 'default', value: 'New course available' },
        { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
      ]);
    });
  });
});
