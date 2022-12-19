import { PayloadAction } from '@reduxjs/toolkit'
import { Constants } from './index.constants'

export const initialState = {
    day: 0,
    month: '',
    year: 0,
    age: 0,
}

const birthdayReducer = (state = initialState, action: PayloadAction<string>) => {
    switch (action.type) {
        case Constants.BIRTHDAY_DAY:
            return { ...state, day: action.payload }
        case Constants.BIRTHDAY_MONTH:
            return { ...state, month: action.payload }
        case Constants.BIRTHDAY_YEAR:
            return { ...state, year: action.payload }
        case Constants.BIRTHDAY_AGE:
            return { ...state, age: action.payload }
        default:
            return state;
    }
}

export default birthdayReducer;