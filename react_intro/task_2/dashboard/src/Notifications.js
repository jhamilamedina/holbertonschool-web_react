import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';

const Notification = () => {
  const handleClick = () => {
    console.log("Close button has been clicked");
  };
  return (
  <div className="Notifications">
    <button
      style={{
        float: 'right',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontSize: '20px',
        marginRight: '10px',
      }}

        aria-label="Close"
        onClick={handleClick}
      >
        x
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
};

export default Notification;