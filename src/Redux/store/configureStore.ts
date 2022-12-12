import { combineReducers, configureStore } from '@reduxjs/toolkit';
import basicReducer from '../ValidateView/Basic/index.reducer';

const reducer = combineReducers({ basicReducer });
const store = configureStore({ reducer });

export default store;