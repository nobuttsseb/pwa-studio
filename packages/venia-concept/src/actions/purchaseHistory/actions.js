import { createActions } from 'redux-actions';

const prefix = 'PURCHASE_HISTORY';
const actionTypes = ['SET_ITEMS', 'RESET'];

export default createActions(...actionTypes, { prefix });
