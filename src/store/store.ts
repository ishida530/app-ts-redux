import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { combineReducers } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk'
import reducer, { initialState } from './reducer';

const rootReducer = combineReducers({})
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))


const composeEnhancers = composeWithDevTools({});
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);
const store = createStore(reducer, initialState, enhancer)

export default store