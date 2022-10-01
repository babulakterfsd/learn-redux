// action creators

import { DECREMENT, INCREMENT } from './actionTypes';

export const counterIncrement = (value) => ({
    type: INCREMENT,
    payload: value,
});

export const counterDecrement = (value) => ({
    type: DECREMENT,
    payload: value,
});
