import { PayloadAction } from "@reduxjs/toolkit";
import { Constants } from "./index.constants";

const initialState = {
    linkedin: '',
    github: ''
}

const socialReducer = (state = initialState, action: PayloadAction<string>) => {
    switch (action.type) {
        case Constants.SOCIAL_LINKEDIN:
            return { ...state, linkedin: action.payload };
        case Constants.SOCIAL_GITHUB:
            return { ...state, github: action.payload };
        default:
            return state;
    }
}

export default socialReducer;