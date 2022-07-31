// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0qev8jXhF5hPzuPXTyfH3TSGcKuNDPko",
  authDomain: "crud-project-46fdf.firebaseapp.com",
  projectId: "crud-project-46fdf",
  storageBucket: "crud-project-46fdf.appspot.com",
  messagingSenderId: "708373246766",
  appId: "1:708373246766:web:3cc11061e31edae5df00bf",
  measurementId: "G-DZN32613C8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;