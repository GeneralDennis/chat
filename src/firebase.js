import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyBLt8azOW8jAl21zcewtd-IZpsTSvZmQD4",
  authDomain: "test-a204f.firebaseapp.com",
  databaseURL: "https://test-a204f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-a204f",
  storageBucket: "test-a204f.appspot.com",
  messagingSenderId: "762800053556",
  appId: "1:762800053556:web:4fe95a1074e6f855e25961",
  measurementId: "G-YYZVL9NRVD"
}

firebase.initializeApp(firebaseConfig);


export default firebase