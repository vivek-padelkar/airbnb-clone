import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducers } from './reducer/user.reducer'

const reducer = combineReducers({ userLogin: userLoginReducers })

const userInfoFromStorege = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

localStorage.getItem('')

const initialState = {
  userLogin: { userinfo: userInfoFromStorege || null },
}

console.log('from store' + JSON.stringify(initialState))
const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
