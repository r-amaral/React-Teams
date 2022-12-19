import { Constants } from './index.constants';

export const basicFullName = (fullName: string) => ({
    type: Constants.BASIC_FULL_NAME,
    payload: fullName
})

export const basicNickName = (nickName: string) => ({
    type: Constants.BASIC_NICK_NAME,
    payload: nickName
})

export const basicEmail = (email: string) => ({
    type: Constants.BASIC_EMAIL,
    payload: email
})

export const basicPhone = (phone: string) => ({
    type: Constants.BASIC_PHONE,
    payload: phone
})

export const basicValidateBirthday = (validateBirthday: boolean) => ({
    type: Constants.BASIC_VALIDATE_BIRTHDAY,
    payload: validateBirthday
})

export const basicTermsVerify = (termsVerify: any) => ({
    type: Constants.BASIC_TERMS_VERIFY,
    payload: termsVerify
})

