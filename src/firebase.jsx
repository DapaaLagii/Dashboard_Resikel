import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCQ9Gid79r5Bekn6kdxoeZJp7I2hLnD26k",
  authDomain: "resikelapp.firebaseapp.com",
  projectId: "resikelapp",
  storageBucket: "resikelapp.firebasestorage.app",
  messagingSenderId: "336611640021",
  appId: "1:336611640021:web:014cb65b654ede6c32985c",
  measurementId: "G-TBQP2Q6TSD"
};

// Inisialisasi aplikasi Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
export { firestore };
export default app;