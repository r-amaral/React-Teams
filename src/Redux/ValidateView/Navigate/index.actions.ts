import { Constants } from './index.constants';

export const currentPage = (page: string) => ({
    type: Constants.CURRENT_PAGE,
    payload: page
})
