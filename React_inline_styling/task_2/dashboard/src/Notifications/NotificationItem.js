import React from 'react';
import PropTypes from 'prop-types';
// import './Notifications.css';

import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  defaultItem: {
    color: 'blue',
  },
  urgentItem: {
    color: 'red',
  },
  Notificationsshow: {
    display: 'block',
  },
  
  Notificationshide: {
    display: 'none',
  },
  
  NotificationsmenuItem: {
    cursor: 'pointer',
  },
});

const NotificationItem = ({ type, html, value, markAsRead, id }) => {
  const handleClick = () => {
    markAsRead(id); // Llamar a markAsRead con el id de la notificación
  };

  const notificationClass = type === 'urgent' ? css(styles.urgentItem) : css(styles.defaultItem);

  return (
    <li
      className={notificationClass}
      data-notification-type={type}
      onClick={handleClick} // Llamar handleClick al hacer clic en el elemento
      dangerouslySetInnerHTML={html ? html : undefined}
    >
      {html ? null : value}
    </li>
  );
};

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func.isRequired, // markAsRead debe ser una función requerida
  id: PropTypes.number.isRequired, // id debe ser un número requerido
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default React.memo(NotificationItem);