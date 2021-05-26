import * as ActionTypes from './ActionTypes';

export const Arrivals = (state = {
    isLoading: true,
    errMess: null,
    arrivals: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ARRIVALS:
            return { ...state, isLoading: false, errMess: null, arrivals: action.payload };

        case ActionTypes.ARRIVALS_LOADING:
            return { ...state, isLoading: true, errMess: null, arrivals: [] }

        case ActionTypes.ARRIVALS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};