import { handleActions } from 'redux-actions';

import actions from 'src/actions/purchaseHistory';

export const name = 'purchaseHistory';

const initialState = {
    items: {}
};

const reducerMap = {
    [actions.setItems]: (state, { payload, error }) => {
        if (error) {
            return state;
        }

        return {
            ...state,
            items: payload
        };
    },
    [actions.reset]: () => initialState
};

export default handleActions(reducerMap, initialState);
