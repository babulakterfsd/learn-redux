import { CHANGE_COLOR, CHANGE_STATUS } from './actionTypes';

export const changeStatus = (status) => ({
    type: CHANGE_STATUS,
    payload: status,
});

export const changeColor = (color, changeType) => ({
    type: CHANGE_COLOR,
    payload: {
        color,
        changeType,
    },
});
