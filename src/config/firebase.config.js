import {initializeApp, FirebaseOptions} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

/**
 * @type {FirebaseOptions}
 */
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
console.info('firestore init');
export const db = getFirestore(app);
