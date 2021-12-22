import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5pXV52xZtej0-oPEgz-zjgOQ_L4rxsk8",
  authDomain: "ecomerce-bladimir-andrade.firebaseapp.com",
  projectId: "ecomerce-bladimir-andrade",
  storageBucket: "ecomerce-bladimir-andrade.appspot.com",
  messagingSenderId: "417947452504",
  appId: "1:417947452504:web:54af5af0d9016ed20d362d",
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
  return firebase.firestore(app);
};

// export const db = getFirestore()
