// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfUgxlP6bTF4Id6N-cynVqDK4FkxhayK4",
  authDomain: "fir-auth-20dbb.firebaseapp.com",
  projectId: "fir-auth-20dbb",
  storageBucket: "fir-auth-20dbb.appspot.com",
  messagingSenderId: "750877658065",
  appId: "1:750877658065:web:33c711269df102abb32ef0"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth }