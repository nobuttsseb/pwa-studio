import { RestApi } from '@magento/peregrine';

import actions from './actions';

const { request } = RestApi.Magento2;

export const getPurchaseHistory = () =>
    async function thunk(dispatch) {
        try {
            const response = await request('/rest/V1/orders/items');
            dispatch(actions.setItems(response));
        } catch (error) {
            dispatch(actions.setItems(error));
        }
    };
