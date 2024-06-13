import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  it('Renderiza sin romperse.', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Renderiza 3 li.', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('li').length).toBe(3);
  });

  it('Renderiza con el texto "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
  });

  it('Debe mostrar el elemento menuItem cuando displayDrawer es false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.menuItem').length).toBe(1);
  });

  it('No debe mostrar el div.Notifications cuando displayDrawer es false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.Notifications').length).toBe(0);
  });

  it('Debe mostrar el elemento menuItem cuando displayDrawer es true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem').length).toBe(1);
  });

  it('Debe mostrar el div.Notifications cuando displayDrawer es true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications').length).toBe(1);
  });
});