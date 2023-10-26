import { initializeApp } from "../firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDvv4ka2swnyhfHY8-nqtfMwLje7v_h-wc",
  authDomain: "sixmotors-72b92.firebaseapp.com",
  projectId: "sixmotors-72b92",
  storageBucket: "sixmotors-72b92.appspot.com",
  messagingSenderId: "797412248315",
  appId: "1:797412248315:web:2b2674182c9354468bfe5e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
