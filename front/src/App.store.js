import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import sagas from './App.sagas';
import reducers from './App.reducers';

const persistConfig = {
    key: 'root',
    storage,
}
const rootReducer = (state, action) => {
  if (action.type === 'LOG_OUT') {
      state = undefined
      console.log('LOG_OUT')
  }
  return reducers(state, action)
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})
const persistor = persistStore(store);
sagaMiddleware.run(sagas);
export { store, persistor }
