
// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyDVADGK81ODxrKzJ7kf19FwJnc9rCmdlw4",
    authDomain: "gns-cf.firebaseapp.com",
    projectId: "gns-cf",
    storageBucket: "gns-cf.appspot.com",
    messagingSenderId: "527514455753",
    appId: "1:527514455753:web:89d83b70bf35ed012f4718",
    measurementId: "G-99HPRM2DX5"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  // self.registration.showNotification(notificationTitle,
  //   notificationOptions);
});

