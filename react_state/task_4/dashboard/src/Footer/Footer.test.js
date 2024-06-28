import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import AppContext from '../App/AppContext';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text().includes('Copyright')).toBe(true);
  });

  it('does not render the "Contact us" link when user is logged out', () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('#contact-link').exists()).toBe(false);
  });

  it('renders the "Contact us" link when user is logged in', () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user: { isLoggedIn: true } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('#contact-link').exists()).toBe(true);
  });
});
