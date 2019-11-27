import { createStore, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import LocalStorage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import allReducer from './reducers';

const persistConfig = {
  key: 'xxx-storage-key-xxx',
  storage: LocalStorage
};

const persistedReducer = persistReducer(persistConfig, allReducer);

export default createStore(persistedReducer, applyMiddleware(thunk, logger));