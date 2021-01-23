import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import saga from '../../sagas/index';
import reducers from '../reducers';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, reducers);

// https://dev.to/bhatvikrant/redux-persist-v6-in-detail-react-10nh
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middlewareEnhancer = composeEnhancer(applyMiddleware(sagaMiddleware));
const store = createStore(persistedReducer, middlewareEnhancer); // reducers,
const persistor = persistStore(store);

sagaMiddleware.run(saga);
export { store, persistor }
