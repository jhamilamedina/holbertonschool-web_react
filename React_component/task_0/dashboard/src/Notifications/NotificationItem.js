import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

const NotificationItem = ({ type, html, value }) => {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html ? html : undefined}>
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
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;