import { encrypt } from '../middleware/encrypt.js'

export const successhandler = (status, message, data, res) => {
  if (!status) status = 200
  res.status(status).send({
    data: encrypt({ message, data }),
  })
}

export const errorhandler = (status, error, res) => {
  if (!status) status = 500
  res.status(status).send({
    data: encrypt({ message }),
  })
}
