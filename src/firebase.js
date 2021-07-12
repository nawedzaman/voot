import firebase from "firebase";
//Authentication
import "firebase/auth";

//realtime database
import "firebase/database";

//Storage can store images, videos...
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAY0bKUtEj_frZ4sbt9w1VscYUyOSbWSdc",
  authDomain: "voot-clone-fcefa.firebaseapp.com",
  projectId: "voot-clone-fcefa",
  databaseURL:
    "https://voot-clone-fcefa-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "voot-clone-fcefa.appspot.com",
  messagingSenderId: "684903677131",
  appId: "1:684903677131:web:5ef3b304af7dac47a3af4e",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
