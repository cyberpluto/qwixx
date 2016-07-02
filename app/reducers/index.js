import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

import fields from './fields'

const rootReducer = combineReducers({ fields, routing: routerReducer })

export default rootReducer
