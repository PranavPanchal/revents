import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBWksNjckJW4RmBO18_R_9KG6vLj5Sq2Q",
  authDomain: "revents-ec768.firebaseapp.com",
  databaseURL: "https://revents-ec768.firebaseio.com",
  projectId: "revents-ec768",
  storageBucket: "",
  messagingSenderId: "704795970772"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
