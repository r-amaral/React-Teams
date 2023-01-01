import { combineReducers, configureStore } from '@reduxjs/toolkit';

import pageNavigation from '../Navigate/index.reducer';
import basicReducer from '../ValidateView/Basic/index.reducer';
import birthdayReducer from '../ValidateView/Basic/Birthday/index.reducer';
import socialReducer from '../ValidateView/Social/index.reducer';
import { certificatesReducer } from '../ValidateView/Certificates/index.reducer';

export const reducer = combineReducers({ basicReducer, pageNavigation, birthdayReducer, socialReducer, certificatesReducer });
const store = configureStore({ reducer });

export default store;