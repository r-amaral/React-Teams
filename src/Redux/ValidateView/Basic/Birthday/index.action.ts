import { Actions } from './index.constants';

export const birthdayDay = (year: number | string) => ({
    type: Actions.BIRTHDAY_DAY,
    payload: year
})

export const birthdayMonth = (month: number | string) => ({
    type: Actions.BIRTHDAY_MONTH,
    payload: month
})

export const birthdayYear = (year: number | string) => ({
    type: Actions.BIRTHDAY_YEAR,
    payload: year
})

export const birthdayAge = (age: number | string) => ({
    type: Actions.BIRTHDAY_AGE,
    payload: age
})


