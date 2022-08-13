import { call, put } from 'redux-saga/effects'
import { db } from '../../../services/firebase'
import { collection, getDoc, getDocs, doc, query, where } from 'firebase/firestore/lite';



const getCollection = async (collectionName, categoryId) => {
    const collectionRef = query(collection(db, collectionName), where("category", "==", parseInt(categoryId) || 3));
    const data = [];
    const querySnapshot = await getDocs(collectionRef);
    querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id })
    });
    return data;
}
const getDocumentById = async (collectionName, id = "") => {
    const byId = await doc(db, collectionName, id);
    const docSnap = await getDoc(byId);
    if (docSnap.exists()) {
        return { ...docSnap.data(), id: docSnap.id };
    }
    return null;
}

async function apiCall(collectionName, params = {}, body) {
    if (params) {
        if (params && params.id) {
            return getDocumentById(collectionName, params.id)
        } else {
            return getCollection(collectionName, params.categoryId)
        }
    }
}

function* ProductsCall(saga, collectionName, params, data) {
    try {
        yield put({ type: saga.saga + '/loading' });
        const response = yield call(apiCall, collectionName, params ? params : null, data);
        yield put({ type: saga.success, payload: response });
    } catch (e) {
        console.log("error", e)
        yield put({ type: saga.saga + '/error', payload: { status: "error", message: e.message } });
    }
}

export default ProductsCall;