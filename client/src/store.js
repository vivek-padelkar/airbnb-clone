import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducers } from './reducer/user.reducer'

const recducer = combineReducers({ userLogin: userLoginReducers })

const userInfoFromStorege = localStorage.getItem('token') || null

const initialState = {
  userlogin: { userinfo: userInfoFromStorege },
  test: '',
}

console.log('from store' + JSON.stringify(initialState))
const middleware = [thunk]

const store = createStore(
  recducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
