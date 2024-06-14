import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

const Notifications = ({ displayDrawer, listNotifications }) => {
  const notificationsClass = displayDrawer ? 'Notifications show' : 'Notifications';

  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div className={notificationsClass}>
          <button
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              fontSize: '16px',
            }}
            aria-label="Close"
            onClick={() => console.log('Close button has been clicked')}
          >
            x
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            {listNotifications.length === 0 ? (
              <NotificationItem
                type="default"
                value="No new notification for now"
              />
            ) : (
              listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                />
              ))
            )}
          </ul>
        </div>
      )}
    </>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
