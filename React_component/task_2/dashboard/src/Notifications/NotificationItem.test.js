import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  it('calls markAsRead with the right ID when clicked', () => {
    // Mock function (spy) for markAsRead
    const mockMarkAsRead = jest.fn();

    // Define a notification object with an id
    const notification = {
      id: 123,
      type: 'default',
      value: 'New notification',
    };

    // Render NotificationItem with mockMarkAsRead as prop
    const wrapper = shallow(
      <NotificationItem
        id={notification.id}
        type={notification.type}
        value={notification.value}
        markAsRead={mockMarkAsRead} // Pass mockMarkAsRead as prop
      />
    );

    // Simulate click on the NotificationItem
    wrapper.find('li').simulate('click');

    // Check if mockMarkAsRead was called with the correct id
    expect(mockMarkAsRead).toHaveBeenCalledWith(notification.id);
  });
});