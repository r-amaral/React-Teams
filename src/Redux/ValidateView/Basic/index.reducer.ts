import { PayloadAction } from '@reduxjs/toolkit'
import { Actions } from './index.constants'

export const initialState = {
    fullName: '',
    nickName: '',
    email: '',
    phone: '',
    termsVerify: false
}

const basicReducer = (state = initialState, action: PayloadAction<string>) => {
    switch (action.type) {
        case Actions.BASIC_FULL_NAME:
            return { ...state, fullName: action.payload }
        case Actions.BASIC_NICK_NAME:
            return { ...state, nickName: action.payload }
        case Actions.BASIC_EMAIL:
            return { ...state, email: action.payload }
        case Actions.BASIC_PHONE:
            return { ...state, phone: action.payload }
        case Actions.BASIC_TERMS_VERIFY:
            return { ...state, termsVerify: action.payload }
        default:
            return state;
    }
}

export default basicReducer;