import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  defaultItem: {
    color: 'blue',
    width: '100%', // Ocupa todo el ancho
    borderBottom: '1px solid black', // Borde negro en la parte inferior
    fontSize: '20px', // Tamaño de fuente
    padding: '10px 8px', // Padding
    boxSizing: 'border-box', // Asegura que el padding se incluya en el ancho total
  },
  urgentItem: {
    color: 'red',
    width: '100%', // Ocupa todo el ancho
    borderBottom: '1px solid black', // Borde negro en la parte inferior
    fontSize: '20px', // Tamaño de fuente
    padding: '10px 8px', // Padding
    boxSizing: 'border-box', // Asegura que el padding se incluya en el ancho total
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
