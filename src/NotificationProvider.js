import React, { createContext, useContext, useState } from 'react';
import Notification from './firebaseNotifications/Notification';

const NotificationContext = createContext();

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};

export const NotificationProvider = ({ children }) => {
  const [notificationKey, setNotificationKey] = useState(0);

  const triggerNotification = () => {
    setNotificationKey((prevKey) => prevKey + 1);
  };

  return (
    <NotificationContext.Provider value={triggerNotification}>
      {children}
      <Notification key={notificationKey} />
    </NotificationContext.Provider>
  );
};
