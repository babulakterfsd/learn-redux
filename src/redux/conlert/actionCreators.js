// action creators

import { ALERT, CONSOLE } from './actionTypes';

export const showAlert = (value) => ({
    type: ALERT,
    payload: value,
});

export const showConsole = (value) => ({
    type: CONSOLE,
    payload: value,
});
