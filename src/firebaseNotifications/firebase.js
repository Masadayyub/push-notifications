import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyBLrJ8v_eIdzmeF9q-UYW3OHlv-QnEGVm8",
  authDomain: "fireclient-8f55f.firebaseapp.com",
  projectId: "fireclient-8f55f",
  storageBucket: "fireclient-8f55f.appspot.com",
  messagingSenderId: "291412873899",
  appId: "1:291412873899:web:3074a86720fa9a94695dee"
};

initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: 'BBLXR2lK8U8tgV6n2cTkA18-Q81gsgp2IFTK66rsdYHpoFqr-lJcb6NMWxNOIesYk8orqNosdSTy8tLwaZGrVSE' })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);

        // Display notification when token is received
        showNotification('Hi', 'Great one');
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {    
    onMessage(messaging, (payload) => {
      // Display notification when a message is received
      showNotification('New Message', payload.notification.body);

      resolve(payload);
    });
  });

function showNotification(title, body) {
  // Check if the browser supports notifications
  if ('Notification' in window) {
    // Check if permission is granted
    if (Notification.permission === 'granted') {
      // If it's okay, create a notification
      new Notification(title, { body });
    } else {
      // If permission is not granted, request permission
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification(title, { body });
        }
      });
    }
  }
}
