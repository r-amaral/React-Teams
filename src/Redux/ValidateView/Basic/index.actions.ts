import { Actions } from './index.constants';

export const validateFullName = (fullName: boolean) => ({
    type: Actions.VALIDATE_FULL_NAME,
    payload: fullName
})

export const validateEmail = (email: boolean) => ({
    type: Actions.VALIDATE_BIRTHDAY,
    payload: email
})

export const validateBirthday = (birthday: boolean | undefined) => ({
    type: Actions.VALIDATE_EMAIL,
    payload: birthday
})

export const validateTermsPrivacy = (termsPrivacy: boolean) => ({
    type: Actions.VALIDATE_TERMS_PRIVACY,
    payload: termsPrivacy
})