import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

function Notifications({ displayDrawer = true, listNotifications = [] }) {
  return (
    <div className="menuItem">
      <p>Your notifications</p>
      {displayDrawer ? (
        <div className="Notifications">
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
          {listNotifications.length === 0 ? (
            <p>No new notifications for now</p>
          ) : (
            <>
              <p>Here is the list of notifications</p>
              <ul>
                {listNotifications.map((item) => (
                  <NotificationItem
                    key={item.id}
                    type={item.type}
                    html={item.html}
                    value={item.value}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
