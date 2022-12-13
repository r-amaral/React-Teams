import { PayloadAction } from '@reduxjs/toolkit'
import { Actions } from './index.constants'

export const initialState = {
    fullName: false,
    email: false,
    birthday: false,
    termsPrivacy: false,
}

const basicReducer = (state = initialState, action: PayloadAction<string>) => {
    switch (action.type) {
        case Actions.VALIDATE_FULL_NAME:
            return { ...state, fullName: action.payload }
        case Actions.VALIDATE_BIRTHDAY:
            return { ...state, email: action.payload }
        case Actions.VALIDATE_EMAIL:
            return { ...state, birthday: action.payload }
        case Actions.VALIDATE_TERMS_PRIVACY:
            return { ...state, termsPrivacy: action.payload }
        default:
            return state;
    }
}

export default basicReducer;