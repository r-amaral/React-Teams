import { PayloadAction } from '@reduxjs/toolkit';
import { Constants } from './index.constants'

export const initialState = {
    Page: 'BASIC'
}

const pageNavigation = (state = initialState, action: PayloadAction<string>) => {
    switch (action.type) {
        case Constants.CURRENT_PAGE:
            return { ...state, Page: action.payload }
        default:
            return state;
    }
}

export default pageNavigation;