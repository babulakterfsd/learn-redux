/* eslint-disable no-case-declarations */
/* eslint-disable consistent-return */
/* eslint-disable default-param-last */
import { CHANGE_COLOR, CHANGE_STATUS } from './actionTypes';

const initialState = {
    status: 'all',
    colors: [],
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_STATUS:
            return {
                ...state,
                status: action.payload,
            };

        case CHANGE_COLOR:
            const { color, changeType } = action.payload;
            switch (changeType) {
                case 'add':
                    return {
                        ...state,
                        colors: [...state.colors, color],
                    };

                case 'remove':
                    return {
                        ...state,
                        colors: state.colors.filter((c) => c !== color),
                    };

                default:
                    return state;
            }

        default:
            return state;
    }
};

export default filterReducer;
