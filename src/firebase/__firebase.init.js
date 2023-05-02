// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlFsNaMklruNZtcZt6vJd2TjkOHrEiVE4",
  authDomain: "phero-assignment-10.firebaseapp.com",
  projectId: "phero-assignment-10",
  storageBucket: "phero-assignment-10.appspot.com",
  messagingSenderId: "874608979668",
  appId: "1:874608979668:web:70ebd27fd5565a7893d541"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;