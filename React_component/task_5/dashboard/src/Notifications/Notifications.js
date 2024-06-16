import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends Component {
  // Método para marcar una notificación como leída
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  render() {
    const { displayDrawer, listNotifications } = this.props;
    const notificationsClass = displayDrawer ? 'Notifications show' : 'Notifications';

    return (
      <>
        <div className="menuItem">Tus notificaciones</div>
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
              aria-label="Cerrar"
              onClick={() => console.log('Se ha hecho clic en el botón Cerrar')}
            >
              x
            </button>
            <p>Aquí está la lista de notificaciones</p>
            <ul>
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