import React, { Component } from 'react';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const bounce = {
  '0%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-5px)' },
  '100%': { transform: 'translateY(5px)' }
};

const opacityChange = {
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 }
};

const styles = StyleSheet.create({
  notifications: {
    border: '2px dashed salmon',
    backgroundColor: '#f9f9f9',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    fontSize: '20px',
    padding: 0,
  },
  menuItem: {
    textAlign: 'right',
    fontSize: '18px',
    margin: '10px 20px',
    cursor: 'pointer',
    float: 'right',
    backgroundColor: '#fff8f8',
    ':hover': {
      animationName: [bounce, opacityChange],
      animationDuration: '0.5s, 1s',
      animationIterationCount: '3, 3'
    }
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  notificationText: {
    fontSize: '20px',
  },
  notificationList: {
    listStyleType: 'none',
    padding: 0,
  }
});

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.listNotifications.length <
      nextProps.listNotifications.length
      ? true
      : false || this.props.displayDrawer !== nextProps.displayDrawer;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
    } = this.props;

    return (
      <div className="menuItem">
        <p onClick={handleDisplayDrawer}>Your notifications</p>
        {displayDrawer ? (
          <div className={css(styles.notifications)}>
            <button
              className={css(styles.button)}
              aria-label="Close"
              onClick={handleHideDrawer}
            >
              x
            </button>
            {listNotifications.length === 0 ? (
              <p className={css(styles.p)}>No new notifications for now</p>
            ) : (
              <>
                <p className={css(styles.p)}>
                  Here is the list of notifications
                </p>
                <ul className={css(styles.ul)}>
                  {listNotifications.map((item) => (
                    <NotificationItem
                      key={item.id}
                      type={item.type}
                      value={item.value}
                      html={item.html}
                      markAsRead={() => this.markAsRead(item.id)}
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
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;
