import firestore from '@react-native-firebase/firestore';

const productCollection = firestore().collection('product');

export class ProductRepository {
  async getById(id) {
    try {
      const docSnap = await productCollection.doc(id).get();
      if (!docSnap.exists) throw new Error('NOT_FOUND');
      return docSnap.data();
    } catch (err) {
      console.error(err.message);
      throw new Error(err);
    }
  }
}
