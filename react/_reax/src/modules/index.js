import { combineReducers } from 'redux'
import counter from './counter'
import test_module from './test-module'

export default combineReducers({
  counter,
  test_module
})
