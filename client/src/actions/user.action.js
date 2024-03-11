import * as constants from '../constants/ReducerConstants/userReducerConstants'
import axiosInstance from '../utils/axiosConfig'
import { AXIOS_HEADER } from '../constants/constants'

export const login = (requestBody) => async (dispatch) => {
  try {
    dispatch({
      type: constants.USER_LOGIN_REQUEST,
    })
    const { data } = await axiosInstance.post(
      '/user/login',
      requestBody,
      AXIOS_HEADER
    )
    console.log('now i am dipatching success')
    dispatch({
      type: constants.USER_LOGIN_SUCCESS,
      payload: data.data,
    })
    console.log('i am data' + data?.data)
    localStorage.setItem('userInfo', JSON.stringify(data?.data))
  } catch (error) {
    console.log('dispatching error because ' + error)
    dispatch({
      type: constants.USER_LOGIN_FAIL,
      payload:
        error?.response?.data?.message || 'Something went wrong try again !',
    })
  }
}