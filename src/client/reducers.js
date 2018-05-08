import { combineReducers } from 'redux';

function mainReducer(state = {}, action) {
    return state;
}

function subReducer(state = {}, action) {
    return state;
}

export default combineReducers({
    main: mainReducer,
    sub: subReducer
});