import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import React from 'react';
import Header from './Header';
import AppContext from '../App/AppContext';

describe('Header Component', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders img and h1 tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
  });

  it('does not create logoutSection with default context value', () => {
    const contextValue = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      logOut: jest.fn(),
    };
    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').exists()).toBe(false);
  });

  it('creates logoutSection with user defined (isLoggedIn true and email set)', () => {
    const contextValue = {
      user: {
        email: 'test@example.com',
        password: '',
        isLoggedIn: true,
      },
      logOut: jest.fn(),
    };
    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').exists()).toBe(true);
    expect(wrapper.find('#logoutSection').text()).toContain('Welcome test@example.com (logout)');
  });

  it('calls logOut function on click of logout link', () => {
    const logOutSpy = jest.fn();
    const contextValue = {
      user: {
        email: 'test@example.com',
        password: '',
        isLoggedIn: true,
      },
      logOut: logOutSpy,
    };
    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.find('#logoutSection span').simulate('click');
    expect(logOutSpy).toHaveBeenCalled();
  });
});
