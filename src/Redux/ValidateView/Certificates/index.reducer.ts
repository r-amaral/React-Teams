import { PayloadAction } from "@reduxjs/toolkit"
import { Constants } from "./index.constants"

const initialState = {
    certificates: [
        {
            value: '',
            id: 1,
            isFavorite: false
        }
    ],
    teamName: '',
    institution: '',
    graduation: ''
}

export const certificatesReducer = (state = initialState, action: PayloadAction<any>) => {
    switch (action.type) {
        case Constants.CERTIFICATES_CERTIFICATES:
            return { ...state, certificates: [...state.certificates, action.payload] }
        case Constants.CERTIFICATES_VALUES:
            return { ...state, certificates: state.certificates.map(item => item.id === action.payload.id ? { ...item, value: action.payload.value } : item) }
        case Constants.CERTIFICATES_FAVORITE:
            return { ...state, certificates: state.certificates.map(item => item.id === action.payload.id ? { ...item, isFavorite: action.payload.isFavorite } : item) }
        case Constants.CERTIFICATES_REMOVE:
            return { ...state, certificates: state.certificates.filter(certificate => certificate.id !== action.payload.id) }
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