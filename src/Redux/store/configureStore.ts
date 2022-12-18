import { combineReducers, configureStore } from '@reduxjs/toolkit';
import pageNavigation from '../ValidateView/Navigate/index.reducer';
import basicReducer from '../ValidateView/Basic/index.reducer';
import birthdayReducer from '../ValidateView/Basic/Birthday/index.reducer';

const reducer = combineReducers({ basicReducer, pageNavigation, birthdayReducer });
const store = configureStore({ reducer });

export default store;