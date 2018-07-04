import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBWksNjckJW4RmBO18_R_9KG6vLj5Sq2Q",
  authDomain: "revents-ec768.firebaseapp.com",
  databaseURL: "https://revents-ec768.firebaseio.com",
  projectId: "revents-ec768",
  storageBucket: "revents-ec768.appspot.com",
  messagingSenderId: "704795970772"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};

firestore.settings(settings);

export default firebase;
