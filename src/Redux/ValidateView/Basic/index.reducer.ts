import { PayloadAction } from '@reduxjs/toolkit'
import { Constants } from './index.constants'

export const initialState = {
    fullName: '',
    nickName: '',
    email: '',
    phone: '',
    validateBirthday: false,
    termsVerify: false
}

const basicReducer = (state = initialState, action: PayloadAction<string>) => {
    switch (action.type) {
        case Constants.BASIC_FULL_NAME:
            return { ...state, fullName: action.payload }
        case Constants.BASIC_NICK_NAME:
            return { ...state, nickName: action.payload }
        case Constants.BASIC_EMAIL:
            return { ...state, email: action.payload }
        case Constants.BASIC_PHONE:
            return { ...state, phone: action.payload }
        case Constants.BASIC_VALIDATE_BIRTHDAY:
            return { ...state, validateBirthday: action.payload }
        case Constants.BASIC_TERMS_VERIFY:
            return { ...state, termsVerify: action.payload }
        default:
            return state;
    }
}

export default basicReducer;