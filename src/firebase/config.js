import firebase from "firebase/app";
import "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyBdgSMk-xm-7mxKqVBRrWFjcTEuSUkWqC4",
  authDomain: "react-app-9771a.firebaseapp.com",
  projectId: "react-app-9771a",
  storageBucket: "react-app-9771a.appspot.com",
  messagingSenderId: "602677960620",
  appId: "1:602677960620:web:85d2cc300656bf53512409"
};

const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
  return firebase.firestore(app)
}