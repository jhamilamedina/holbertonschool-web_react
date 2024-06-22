import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications displayDrawer />);
  });

  it('Renderiza sin romperse.', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Renderiza 3 componentes NotificationItem.', () => {
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });
});
