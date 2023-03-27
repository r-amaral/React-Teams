import { PayloadAction } from '@reduxjs/toolkit';
import { Constants } from './index.constants'

export const initialState = {
    page: 'CERTIFICATES'
}

const pageNavigation = (state = initialState, action: PayloadAction<string>) => {
    switch (action.type) {
        case Constants.CURRENT_PAGE:
            return { ...state, page: action.payload }
        default:
            return state;
    }
}

export default pageNavigation;