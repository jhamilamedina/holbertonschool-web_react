import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications component', () => {
  describe('When listNotifications is empty or not provided', () => {
      let wrapper;

      beforeEach(() => {
          wrapper = shallow(<Notifications listNotifications={[]} />);
      });

      it('renders correctly with an empty array', () => {
          expect(wrapper.find(NotificationItem).length).toBe(0);
          expect(wrapper.text()).toContain('No new notification for now');
      });

      it('renders correctly without listNotifications prop', () => {
          wrapper = shallow(<Notifications />);
          expect(wrapper.find(NotificationItem).length).toBe(0);
          expect(wrapper.text()).toContain('No new notification for now');
      });

      it('does not show "Here is the list of notifications"', () => {
          expect(wrapper.text()).not.toContain('Here is the list of notifications');
          expect(wrapper.text()).toContain('No new notification for now');
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
  });
});