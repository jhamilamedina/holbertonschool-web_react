import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem.js';
import NotificationItemShape from './NotificationItemShape';

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
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <>
        <div className={css(styles.menuItem)}>Tus notificaciones</div>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button
              className={css(styles.closeButton)}
              aria-label="Cerrar"
              onClick={() => console.log('Se ha hecho clic en el botón Cerrar')}
            >
              x
            </button>
            <p className={css(styles.notificationText)}>Aquí está la lista de notificaciones</p>
            <ul className={css(styles.notificationList)}>
              {listNotifications.length === 0 ? (
                <NotificationItem
                  type="default"
                  value="No hay nuevas notificaciones por ahora"
                />
              ) : (
                listNotifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={this.markAsRead}
                  />
                ))
              )}
            </ul>
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
