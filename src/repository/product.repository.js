import {db} from '@src/config/firebase.config';
import {collection, getDocs, query, where} from 'firebase/firestore';

const productRef = collection(db, 'product');

export class ProductRepository {
  async getById(id) {
    try {
      const result = await getDocs(query(productRef, where('id', '==', id)));
      return result;
    } catch (error) {
      throw new Error('Not found data');
    }
  }
}
