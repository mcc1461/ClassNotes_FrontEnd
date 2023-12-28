import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
//! firebase console settings bölümünden firebaseconfig ayarlarını al
const firebaseConfig = {
  apiKey: "AIzaSyCFpq8CV6LJUm6ECYn6Xxp4DYRIM-1bC6o",
  authDomain: "mcc111.firebaseapp.com",
  projectId: "mcc111",
  storageBucket: "mcc111.appspot.com",
  messagingSenderId: "487787599046",
  appId: "1:487787599046:web:9b88c1e9d9e5476652b3c7",
  measurementId: "G-EVE5NFYT1X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);


// REACT_APP_TMDB_KEY=0bb72bd057c28b3c864ac53d4409b893