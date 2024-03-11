import * as constants from '../constants/ReducerConstants/userReducerConstants'

export const userLoginReducers = (state = {}, action) => {
  console.log('i am with ' + action.type)
  switch (action.type) {
    case constants.USER_LOGIN_REQUEST:
      return { loading: true }
    case constants.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload, error: null }
    case constants.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case constants.USER_LOGOUT:
      return {}
    default:
      return state
  }
}
