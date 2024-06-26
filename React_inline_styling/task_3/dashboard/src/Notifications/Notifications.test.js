import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import React from 'react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications component', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  describe('When listNotifications is empty or not provided', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Notifications listNotifications={[]} />);
    });

    it('renders correctly with an empty array', () => {
      expect(wrapper.find(NotificationItem).length).toBe(0);
      expect(wrapper.text()).toContain('No hay nuevas notificaciones por ahora');
    });

    it('renders correctly without listNotifications prop', () => {
      wrapper = shallow(<Notifications />);
      expect(wrapper.find(NotificationItem).length).toBe(0);
      expect(wrapper.text()).toContain('No hay nuevas notificaciones por ahora');
    });

    it('does not show "Here is the list of notifications"', () => {
      expect(wrapper.text()).not.toContain('Aquí está la lista de notificaciones');
      expect(wrapper.text()).toContain('No hay nuevas notificaciones por ahora');
    });
  });

  describe('When listNotifications contains elements', () => {
    let wrapper;
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
    ];

    beforeEach(() => {
      wrapper = shallow(<Notifications listNotifications={notifications} />);
    });

    it('renders the correct number of NotificationItem components', () => {
      expect(wrapper.find(NotificationItem).length).toBe(3);
    });

    it('renders each NotificationItem correctly', () => {
      const notificationItems = wrapper.find(NotificationItem);
      expect(notificationItems.at(0).prop('value')).toEqual('New course available');
      expect(notificationItems.at(1).prop('value')).toEqual('New resume available');
      expect(notificationItems.at(2).prop('html')).toEqual({ __html: '<strong>Urgent requirement</strong> - complete by EOD' });
    });

    it('calls markAsRead correctly when NotificationItem is clicked', () => {
      // Spy on console.log
      const consoleSpy = jest.spyOn(console, 'log');

      // Simulate clicking on the first NotificationItem
      const notificationItems = wrapper.find(NotificationItem);
      notificationItems.at(0).simulate('click');

      // Check if markAsRead was called with the correct id
      expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');

      // Clean up the spy
      consoleSpy.mockRestore();
    });
  });

  // New tests for shouldComponentUpdate
  describe('shouldComponentUpdate behavior', () => {
    let wrapper;
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];

    beforeEach(() => {
      wrapper = shallow(<Notifications listNotifications={notifications} />);
    });

    it('does not rerender when updating props with the same list', () => {
      const spy = jest.spyOn(Notifications.prototype, 'render');
      wrapper.setProps({ listNotifications: notifications });
      expect(spy).not.toHaveBeenCalled();
      spy.mockRestore();
    });

    it('rerenders when updating props with a longer list', () => {
      const spy = jest.spyOn(Notifications.prototype, 'render');
      const newNotifications = [
        ...notifications,
        { id: 3, type: 'urgent', value: 'New job offer available' },
      ];
      wrapper.setProps({ listNotifications: newNotifications });
      expect(spy).toHaveBeenCalled();
      spy.mockRestore();
    });
  });
});
