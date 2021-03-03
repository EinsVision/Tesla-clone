import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDhj3H43PcmdBB2u1sgOK8bOaLoxOTJfx0",
  authDomain: "tesla-clone-d48bb.firebaseapp.com",
  projectId: "tesla-clone-d48bb",
  storageBucket: "tesla-clone-d48bb.appspot.com",
  messagingSenderId: "825550877920",
  appId: "1:825550877920:web:93bb20e533b5d502a28c85"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };