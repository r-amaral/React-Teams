import { PayloadAction } from '@reduxjs/toolkit'
import { Actions } from './index.constants'

export const initialState = {
    day: 0,
    month: '',
    year: 0,
    age: 0,
}

const birthdayReducer = (state = initialState, action: PayloadAction<string>) => {
    switch (action.type) {
        case Actions.BIRTHDAY_DAY:
            return { ...state, day: action.payload }
        case Actions.BIRTHDAY_MONTH:
            return { ...state, month: action.payload }
        case Actions.BIRTHDAY_YEAR:
            return { ...state, year: action.payload }
        case Actions.BIRTHDAY_AGE:
            return { ...state, age: action.payload }
        default:
            return state;
    }
}

export default birthdayReducer;