import { Constants } from './index.constants';

export const birthdayDay = (year: number | string) => ({
    type: Constants.BIRTHDAY_DAY,
    payload: year
})

export const birthdayMonth = (month: number | string) => ({
    type: Constants.BIRTHDAY_MONTH,
    payload: month
})

export const birthdayYear = (year: number | string) => ({
    type: Constants.BIRTHDAY_YEAR,
    payload: year
})

export const birthdayAge = (age: number | string) => ({
    type: Constants.BIRTHDAY_AGE,
    payload: age
})


