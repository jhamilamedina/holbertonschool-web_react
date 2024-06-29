import React, { Component } from 'react';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  notifications: {
    border: '2px dashed salmon',
    background: 'white',
    '@media (max-width: 900px)': {
      position: 'fixed',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      padding: 0,
      fontSize: '20px',
      zIndex: 1000,
    },
  },
  ul: {
    padding: 0,
    '@media (max-width: 900px)': {
      padding: 0,
    },
  },
  p: {
    margin: '5px',
    '@media (max-width: 900px)': {
      fontSize: '20px',
    },
  },
  button: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    fontSize: '16px',
  },
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
