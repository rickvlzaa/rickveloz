import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducers from './reducers';



export default function(initialState={}) {
    const enhancers = [thunk];
    return createStore(reducers, initialState, compose(applyMiddleware(enhnacers)));
}