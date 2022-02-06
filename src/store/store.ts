import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer, { initialState } from './reducer';




const composeEnhancers = composeWithDevTools({});
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);
const store = createStore(reducer, initialState, enhancer)

export default store