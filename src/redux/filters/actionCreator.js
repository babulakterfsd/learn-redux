import { CHANGE_COLOR, CHANGE_STATUS } from './actionTypes';

export const changeStatus = (status) => ({
    TYPE: CHANGE_STATUS,
    payload: status,
});

export const changeColor = (color, changeType) => ({
    TYPE: CHANGE_COLOR,
    payload: {
        color,
        changeType,
    },
});
