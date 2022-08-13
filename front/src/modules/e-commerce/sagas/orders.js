import { takeLatest } from 'redux-saga/effects'
import { call, put } from 'redux-saga/effects'
import { collection, getDoc, doc, writeBatch } from 'firebase/firestore/lite';
import { db } from '../../../services/firebase'
import { clearCart, add } from '../reducers/cart'
import { post, fetch, successOrder, successFetch, error } from '../reducers/orders';

const saga = 'orders';

async function ordersCallPost(data) {
    const batch = writeBatch(db);
    for (let productItem of data.items) {
        const productRef = await doc(db, "products", productItem.id);
        debugger
        const productDb = await getDoc(productRef);
        if (productDb.data().stock >= productItem.units) {
            await batch.update(productRef, { stock: productDb.data().stock - productItem.units })
        } else {
            throw {
                message: 'Items out of stock',
                name: "ExceptionStock",
            };
        }
    }
    const ordersRef = await doc(collection(db, "orders"));
    await batch.set(ordersRef, data);
    await batch.commit();
    const orderDb = await getDoc(ordersRef);
    return { ...orderDb.data(), id: orderDb.id }
}

function* sendOrdersCall(saga, data) {
    try {
        yield put({ type: saga.saga + '/loading' });
        const response = yield ordersCallPost(data);
        yield put(clearCart());
        yield put({ type: saga.success, payload: response });
    } catch (e) {
        if (e.name === "ExceptionStock") {
            yield GetOrderByUserCall({ saga, success: successFetch.type, error }, data.items);
        }
        yield put({ type: saga.saga + '/error', payload: { status: "error", message: e.message, name: e.name } });
    }
}
async function getProductsFromCart(items) {
    const newStock = [];
    for (let productItem of items) {
        const productRef = await doc(db, "products", productItem.id);
        const productDb = await getDoc(productRef);
        newStock.push({ ...productItem, stock: productDb.data().stock })
    }
    return newStock;
}

function* GetOrderByUserCall(saga, data) {
    try {
        yield put({ type: saga.saga + '/loading' });
        const response = yield call(getProductsFromCart, data);
        for (let item of response) {
            yield put(add(item));
        }
        yield put({ type: saga.success, payload: response });
    } catch (e) {
        yield put({ type: saga.saga + '/error', payload: { status: "error", message: e.message, name: e.name } });
    }
}

function* sendOrder(params) {
    yield sendOrdersCall({ saga, success: successOrder.type, error }, params.payload);
}
function* getOrderByUser(params) {
    yield GetOrderByUserCall({ saga, success: successFetch.type, error }, params.payload);
}


export function* orders() {
    yield takeLatest(post.type, sendOrder);
    yield takeLatest(fetch.type, getOrderByUser);
}