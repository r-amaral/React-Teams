import { combineReducers, configureStore } from '@reduxjs/toolkit';
import pageNavigation from '../ValidateView/Navigate/index.reducer';
import basicReducer from '../ValidateView/Basic/index.reducer';

const reducer = combineReducers({ basicReducer, pageNavigation });
const store = configureStore({ reducer });

export default store;