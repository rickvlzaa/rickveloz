import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers';



export default createStore(reducers, applyMiddleware(logger));