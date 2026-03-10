importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// আপনার নিজের Firebase Config এখানে বসান
firebase.initializeApp({
    apiKey: "AIzaSyAzGK_y9kx5oVFL1-rGTnSDxDvdYoVIqOg",
    authDomain: "bmkf-donation-system.firebaseapp.com",
    databaseURL: "https://bmkf-donation-system-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "bmkf-donation-system",
    storageBucket: "bmkf-donation-system.firebasestorage.app",
    messagingSenderId: "718912081844",
    appId: "1:718912081844:web:98d102b1a6dc07464cace1"
});

const messaging = firebase.messaging();

// ব্যাকগ্রাউন্ড নোটিফিকেশন হ্যান্ডেল করা
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'logo.png' // আপনার লোগোর নাম
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
