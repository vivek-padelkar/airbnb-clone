import { encrypt } from '../middleware/encrypt.middleware.js'

export const successhandler = (status, message, data, res, cookie = null) => {
  if (!status) status = 200
  const encryptedRequest = encrypt({ message, data })
  if (cookie) {
    res.cookie('token', cookie).send({ data: encryptedRequest })
  } else {
    res.status(200).send({
      data: encryptedRequest,
    })
  }
}

export const errorhandler = (status, error, res) => {
  if (!status) status = 500
  res.status(status).send({
    message: error.message || error,
  })
}
