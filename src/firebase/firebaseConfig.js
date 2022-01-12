import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzvGv32DS5_YXft_8vk7im3zWVHx04PaU",
  authDomain: "ecommerce-react-9d2e7.firebaseapp.com",
  projectId: "ecommerce-react-9d2e7",
  storageBucket: "ecommerce-react-9d2e7.appspot.com",
  messagingSenderId: "191083484146",
  appId: "1:191083484146:web:f8517716fca9576f9fd16b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
