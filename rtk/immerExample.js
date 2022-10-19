/* eslint-disable no-param-reassign */
/* eslint-disable default-param-last */
const { createStore } = require('redux');
const { produce } = require('immer');

const initialState = {
    name: 'Learn with Sumit',
    address: {
        street: 'Gulshan',
        city: 'Dhaka',
        country: 'Bangladesh',
    },
};

// action creator
const updateStreet = (street) => ({
    type: 'street_updated',
    payload: street,
});

// reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'street_updated':
            // evabe immutably return korte hoy normally.
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload,
            //     },
            // };

            // ar immer er sahajje evabe state ke sorasori update korte pari. karon immer ekta produce naame function dey jeta duita parameter ney. first parameter e main state, r second parameter e ekta callback function ney. oi callback abar draftState ke parameter hishebe ney. jeta sorasori update korte parbe. pore immer nije nije immutably update kore dibe ar evabei amader kaj shohoj kore dey. jemon:
            return produce(state, (draftState) => {
                draftState.address.street = action.payload;
            });

        default:
            return state;
    }
};

const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(updateStreet('Banani'));
