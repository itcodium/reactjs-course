

import { db } from './firebase'
import { query, collection, addDoc, getDocs, getDoc, doc, deleteDoc } from 'firebase/firestore/lite';
import { PRODUCTS } from './data'

export const setUp = async () => {
    await deleteProducts();
    PRODUCTS.forEach(async (doc) => {
        await addDoc(collection(db, "products"), doc);
    });
}

const deleteProducts = async () => {
    const q = query(collection(db, "products"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (item) => {
        await deleteDoc(doc(db, "products", item.id));
    });
}

const getCollectionReference = async (collectionName) => {
    const collectionRef = query(collection(db, collectionName));
    const data = [];
    const querySnapshot = await getDocs(collectionRef);
    querySnapshot.forEach(async( doc) => {
        const customer = await getDoc(doc.data().customer);
        console.log("customer", customer.data())
    });
}
