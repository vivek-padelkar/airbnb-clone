import { encrypt } from '../middleware/encrypt.middleware.js'

export const successhandler = (status, message, data, res, token = null) => {
  if (!status) status = 200
  const encryptedRequest = encrypt({ message, data })
  res.status(200).send({
    data: encryptedRequest,
    authorization: token,
  })
}

export const errorhandler = (status, error, res) => {
  if (!status) status = 500
  res.status(status).send({
    message: error.message || error,
  })
}
