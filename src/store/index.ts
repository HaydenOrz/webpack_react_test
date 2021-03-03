import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as app from './reducers'

export default createStore(
    combineReducers({ ...app }),
    applyMiddleware(thunk)
)