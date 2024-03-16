import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducers } from './reducer/user.reducer'
import { fileUploadReducers } from './reducer/fileUpload.reducer'

const reducer = combineReducers({
  userLogin: userLoginReducers,
  uploadedFile: fileUploadReducers,
})

const userInfoFromStorege = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorege || null },
  uploadedFile: { files: [] },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
