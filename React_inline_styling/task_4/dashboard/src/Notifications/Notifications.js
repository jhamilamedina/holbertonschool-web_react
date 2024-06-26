import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem.js';
import NotificationItemShape from './NotificationItemShape';

const opacityChange = {
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 },
};

const bounce = {
  '0%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-5px)' },
  '100%': { transform: 'translateY(5px)' },
};

const styles = StyleSheet.create({
  notifications: {
    border: '2px dashed salmon',
    padding: '5px',
    backgroundColor: '#f9f9f9',
    position: 'absolute',
    right: '20px',
    width: '350px',
  },
  notificationsOpen: {
    border: 'none',
    padding: '0',
    backgroundColor: '#fff',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    width: '100%',
    height: '100%',
    zIndex: '1000',
  },
  menuItem: {
    textAlign: 'right',
    fontSize: '18px',
    margin: '10px 20px',
    cursor: 'pointer',
    position: 'fixed',
    right: '0',
    backgroundColor: '#fff8f8',
    ':hover': {
      animationName: [opacityChange, bounce],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3, 3',
    },
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
  ul: {
    padding: '0',
  },
});

class Notifications extends Component {
  // Método para marcar una notificación como leída
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  // Método para determinar si el componente debe actualizarse
  shouldComponentUpdate(nextProps) {
    // Solo actualizar si la nueva lista de notificaciones es más larga que la anterior
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    const notificationsClass = displayDrawer ? css(styles.notificationsOpen) : css(styles.notifications);

    return (
      <>
        {!displayDrawer && <div className={css(styles.menuItem)}>Tus notificaciones</div>}
        {displayDrawer && (
          <div className={notificationsClass}>
            <button
              className={css(styles.closeButton)}
              aria-label="Cerrar"
              onClick={() => console.log('Se ha hecho clic en el botón Cerrar')}
            >
              x
            </button>
            <p className={css(styles.notificationText)}>Aquí está la lista de notificaciones</p>
            <ul className={css(styles.ul)}>
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
                    markAsRead={this.markAsRead} // Pasar el método como prop
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
