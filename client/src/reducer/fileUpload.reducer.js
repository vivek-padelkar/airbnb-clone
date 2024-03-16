import * as constants from '../constants/ReducerConstants/fileUploadReducerConstants'

export const fileUploadReducers = (state = { files: [] }, action) => {
  console.log('i am inside ')
  console.log('with payload' + JSON.stringify(action.payload))
  // console.log(
  //   'doing this ',
  //   state.uploadedFile &&
  //     JSON.stringify([...state.uploadedFile, action.payload])
  // )

  console.log(JSON.stringify(state.files))
  switch (action.type) {
    case constants.FILE_UPLOAD_REQUEST:
      return { loading: true }
    case constants.FILE_UPLOAD_SUCCESS:
      return {
        loading: false,
        files: [...state.files, action.payload],
        error: null,
      }
    case constants.FILE_UPLOAD_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
