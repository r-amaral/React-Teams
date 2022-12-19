import { PayloadAction } from "@reduxjs/toolkit"
import { Constants } from "./index.constants"

const initialState = {
    certificates: [],
    teamName: '',
    institution: '',
    graduation: ''
}

export const certificatesReducer = (state = initialState, action: PayloadAction) => {
    switch (action.type) {
        case Constants.CERTIFICATES_CERTIFICATES:
            return { ...state, certificate: action.payload }
        case Constants.CERTIFICATES_TEAM_NAME:
            return { ...state, teamName: action.payload }
        case Constants.CERTIFICATES_INSTITUTION:
            return { ...state, institution: action.payload }
        case Constants.CERTIFICATES_GRADUATION:
            return { ...state, graduation: action.payload }
        default:
            return state;
    }
}