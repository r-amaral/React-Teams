import { Actions } from './index.constants';

export const basicFullName = (fullName: string) => ({
    type: Actions.BASIC_FULL_NAME,
    payload: fullName
})

export const basicNickName = (nickName: string) => ({
    type: Actions.BASIC_NICK_NAME,
    payload: nickName
})

export const basicEmail = (email: string) => ({
    type: Actions.BASIC_EMAIL,
    payload: email
})

export const basicPhone = (phone: string) => ({
    type: Actions.BASIC_PHONE,
    payload: phone
})

export const basicTermsVerify = (termsVerify: any) => ({
    type: Actions.BASIC_TERMS_VERIFY,
    payload: termsVerify
})

