import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import React from 'react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

// Mock data for notifications
const notifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
];

describe('Notifications component', () => {
  let wrapper;
  let handleDisplayDrawerMock = jest.fn();
  let handleHideDrawerMock = jest.fn();
  let markNotificationAsReadMock = jest.fn();

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  beforeEach(() => {
    wrapper = shallow(
      <Notifications
        listNotifications={notifications}
        handleDisplayDrawer={handleDisplayDrawerMock}
        handleHideDrawer={handleHideDrawerMock}
        markNotificationAsRead={markNotificationAsReadMock}
        displayDrawer={false} // Set displayDrawer to false by default
      />
    );
  });

  it('calls handleDisplayDrawer when menu item is clicked', () => {
    wrapper.find('.menuItem').simulate('click');
    expect(handleDisplayDrawerMock).toHaveBeenCalled();
  });

  it('calls handleHideDrawer when close button is clicked', () => {
    wrapper.setProps({ displayDrawer: true }); // Simulate displayDrawer being true
    wrapper.find('.closeButton').simulate('click');
    expect(handleHideDrawerMock).toHaveBeenCalled();
  });

  describe('When listNotifications is empty or not provided', () => {
    beforeEach(() => {
      wrapper.setProps({ listNotifications: [] });
    });

    it('renders correctly with an empty array', () => {
      expect(wrapper.find(NotificationItem).length).toBe(0);
      expect(wrapper.text()).toContain('No hay nuevas notificaciones por ahora');
    });

    it('does not show "Aquí está la lista de notificaciones"', () => {
      expect(wrapper.text()).not.toContain('Aquí está la lista de notificaciones');
      expect(wrapper.text()).toContain('No hay nuevas notificaciones por ahora');
    });
  });

  describe('When listNotifications contains elements', () => {
    beforeEach(() => {
      wrapper.setProps({ listNotifications: notifications });
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

    it('calls markNotificationAsRead correctly when NotificationItem is clicked', () => {
      const notificationItems = wrapper.find(NotificationItem);
      notificationItems.at(0).simulate('click');
      expect(markNotificationAsReadMock).toHaveBeenCalledWith(1);
    });
  });
});
