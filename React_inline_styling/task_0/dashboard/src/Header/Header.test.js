import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header Component', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders img and h1 tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').length).toBe(1); // Asumiendo que hay un img tag
    expect(wrapper.find('h1').length).toBe(1); // Asumiendo que hay un h1 tag
  });
});