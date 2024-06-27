import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  defaultItem: {
    color: 'blue',
    width: '100%',
    borderBottom: '1px solid black',
    fontSize: '20px',
    padding: '10px 8px',
  },
  urgentItem: {
    color: 'red',
    width: '100%',
    borderBottom: '1px solid black',
    fontSize: '20px',
    padding: '10px 8px',
  },
});

const NotificationItem = ({ type, html, value, markAsRead, id }) => {
  const handleClick = () => {
    markAsRead(id);
  };

  const notificationClass = type === 'urgent' ? css(styles.urgentItem) : css(styles.defaultItem);

  return (
    <li
      className={notificationClass}
      data-notification-type={type}
      onClick={handleClick}
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
  markAsRead: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default React.memo(NotificationItem);
