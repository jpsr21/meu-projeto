import firebase from 'firebase/app';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCoPWgHhCASXqIqHINee0ZUHHkRMv1jGZg",
    authDomain: "imagem-dd539.firebaseapp.com",
    databaseURL: "https://imagem-dd539.firebaseio.com",
    projectId: "imagem-dd539",
    storageBucket: "imagem-dd539.appspot.com",
    messagingSenderId: "623186661127",
    appId: "1:623186661127:web:644235a42dc620f3d5bfa2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }