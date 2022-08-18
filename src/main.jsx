import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
// llama a funcion App

// firebase
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCv-JLDNvtzRjDjCIrnlnsa_uqMudt9sHA",
  authDomain: "luminatidecoracion.firebaseapp.com",
  projectId: "luminatidecoracion",
  storageBucket: "luminatidecoracion.appspot.com",
  messagingSenderId: "313294687314",
  appId: "1:313294687314:web:5c325a30b2dceeab3ea38b"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
// fin firebase

ReactDOM.createRoot(document.getElementById('root')).render( //root llama al script del index.html y renderiza la funcion app
  <>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
  </>
)
