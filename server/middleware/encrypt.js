import CryptoJS from 'crypto-js'

// Encrypt
export const encrypt = (req, res, next) => {
  try {
    const encryptedMsg = CryptoJS.AES.encrypt(
      res,
      process.env.SECRET_KEY
    ).toString()
    return encryptedMsg
  } catch (error) {
    throw Error('Error while encypting')
  }
}

export const decrypt = (req, res, next) => {
  try {
    const bytes = CryptoJS.AES.decrypt(req.body.data, process.env.SECRET_KEY)
    const decrypedBody = bytes.toString(CryptoJS.enc.Utf8)
    req.data = JSON.parse(decrypedBody)
    next()
  } catch (error) {
    throw Error('Error while decypting')
  }
}
