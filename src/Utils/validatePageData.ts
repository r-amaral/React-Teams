import { regName, regEmail, regexUrl } from "./regex";

import store from "../Redux/store/configureStore";
import { currentPage } from "../Redux/Navigate/index.actions";

export const validatePageData = (page: string): void | boolean => {

    const { fullName, email, validateBirthday, termsVerify } = store.getState().basicReducer;
    const { github } = store.getState().socialReducer;

    const basicState = {
        fullName: regName.test(fullName),
        email: regEmail.test(email),
        birthday: validateBirthday,
        termsPrivacy: termsVerify,
    };

    const validateData = Object.values(basicState).every((attr: any) => attr === true)

    switch (page) {
        case "CERTIFICATES":
            if (!validateData) return false;
            return regexUrl.test(github) && nextPage("CERTIFICATES");
        case "SOCIAL":
            return validateData && nextPage('SOCIAL');
        default:
            return false;
    }
};

const nextPage = (page: string): void => {
    store.dispatch(currentPage(page));
};
