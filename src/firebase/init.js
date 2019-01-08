import firebase from 'firebase';
import firestorm from 'firebase/firestorm';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD-F-k0Pc9Yih99_A0zon4_wwz895CPBcs",
  authDomain: "live-vuejs-chat.firebaseapp.com",
  databaseURL: "https://live-vuejs-chat.firebaseio.com",
  projectId: "live-vuejs-chat",
  storageBucket: "live-vuejs-chat.appspot.com",
  messagingSenderId: "588073699754"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({
  timestampsInSnapshots: true
});

export default firebaseApp.firestore()
