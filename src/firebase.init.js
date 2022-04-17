// Import the functions you need from the SDKs you need
import { getAuth , initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcD4XRT-b0wgP0s4dE-ZTMSuN8N2XeIQA",
  authDomain: "learn-with-john.firebaseapp.com",
  projectId: "learn-with-john",
  storageBucket: "learn-with-john.appspot.com",
  messagingSenderId: "170463189445",
  appId: "1:170463189445:web:64a1d217199ff69e3cd3ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;