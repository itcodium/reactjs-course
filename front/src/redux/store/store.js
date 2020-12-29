import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import saga from '../../sagas/index';
import reducers from '../reducers'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middlewareEnhancer = composeEnhancer(applyMiddleware(sagaMiddleware));
const store = createStore(reducers, middlewareEnhancer);

sagaMiddleware.run(saga);
export default store;
