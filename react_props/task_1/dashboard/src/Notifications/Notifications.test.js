import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it('Renderiza sin romperse.', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Renderiza 3 li.', () => {
    expect(wrapper.find('li').length).toBe(3);
  });

  it('Renderiza con el texo "Here is the list of notifications"', () => {
    expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
  });
});