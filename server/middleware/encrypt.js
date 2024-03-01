import CryptoJS from 'crypto-js'

// Encrypt
export const encrypt = (message) => {
  try {
    const encryptedMsg = CryptoJS.AES.encrypt(
      message,
      process.env.SECRET_KEY
    ).toString()
    return encryptedMsg
  } catch (error) {
    throw Error('Error while encypting')
  }
}

export const decrypt = (message) => {
  try {
    const bytes = CryptoJS.AES.decrypt(message, process.env.SECRET_KEY)
    const decryptedMsg = bytes.toString(CryptoJS.enc.Utf8)
    return decryptedMsg
  } catch (error) {
    throw Error('Error while decypting')
  }
}
