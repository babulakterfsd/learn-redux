/* eslint-disable no-alert */
/* eslint-disable default-param-last */
import { ALERT, CONSOLE } from './actionTypes';

const initialState = {
    value: null,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALERT:
            alert(action.payload);
            return {
                ...state,
                value: action.payload,
            };
        case CONSOLE:
            console.log(action.payload);
            return {
                ...state,
                value: action.payload,
            };

        default:
            return state;
    }
};
export default counterReducer;
