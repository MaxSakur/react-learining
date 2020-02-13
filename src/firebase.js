import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDsdj8xqOuto8KvdXkYZ5vUE5r32321UkM",
  authDomain: "testshopbase-6bc3e.firebaseapp.com",
  databaseURL: "https://testshopbase-6bc3e.firebaseio.com",
  projectId: "testshopbase-6bc3e",
  storageBucket: "testshopbase-6bc3e.appspot.com",
  messagingSenderId: "694345077527",
  appId: "1:694345077527:web:9983de22e5071759885d52",
  measurementId: "G-N68S4NPQP4"
};

firebase.initializeApp(config);

export default firebase;
