import * as constants from '../constants/ReducerConstants/fileUploadReducerConstants'
import axiosInstance from '../utils/axiosConfig'
import { AXIOS_HEADER } from '../constants/constants'

export const uploadFile = (requestBody) => async (dispatch, getSate) => {
  try {
    dispatch({
      type: constants.FILE_UPLOAD_REQUEST,
    })

    console.log(' i am getting state' + JSON.stringify(getSate()))
    const token = JSON.parse(localStorage.getItem('userInfo')).token
    AXIOS_HEADER.headers.Authorization = `Bearer ${token}`

    const { data } = await axiosInstance.post(
      '/user/upload-by-link',
      requestBody,
      AXIOS_HEADER
    )
    dispatch({
      type: constants.FILE_UPLOAD_SUCCESS,
      payload: data.data,
    })

    console.log(
      'AFTER i am getting state' + JSON.stringify(getSate().uploadedFile, files)
    )
    // localStorage.setItem(
    //   'uploadedFile',
    //   JSON.stringify([...getSate().uploadedFile, data.data])
    // )
  } catch (error) {
    console.log('dispatching error because ' + error.stack)
    dispatch({
      type: constants.FILE_UPLOAD_FAIL,
      payload:
        error?.response?.data?.message || 'Something went wrong try again !',
    })
  }
}
