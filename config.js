import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDywgYoH7j4FibcMi-x3vGGH9mn2mb8kKA",
  authDomain: "barterer-b6fab.firebaseapp.com",
  databaseURL: "https://barterer-b6fab.firebaseio.com",
  projectId: "barterer-b6fab",
  storageBucket: "barterer-b6fab.appspot.com",
  messagingSenderId: "938615429500",
  appId: "1:938615429500:web:598df1798c8a60223c2cf9",
  measurementId: "G-G9FXR5LTRV"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
