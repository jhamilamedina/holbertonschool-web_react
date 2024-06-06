// import { render, screen } from '@testing-library/react';
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from './Notifications';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
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
});