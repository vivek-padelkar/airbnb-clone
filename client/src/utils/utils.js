const SECRET_KEY = import.meta.env.VITE_SECRET_KEY
import CryptoJS from 'crypto-js'
// Encrypt
export const encrypt = (message) => {
  try {
    const encryptedMsg = CryptoJS.AES.encrypt(message, SECRET_KEY).toString()
    return encryptedMsg
  } catch (error) {
    throw Error('Error while encypting')
  }
}

export const decrypt = (message) => {
  try {
    const bytes = CryptoJS.AES.decrypt(message, SECRET_KEY)
    const decryptedMsg = bytes.toString(CryptoJS.enc.Utf8)
    console.log(JSON.stringify(decryptedMsg))
    return decryptedMsg
  } catch (error) {
    throw Error('Error while decypting')
  }
}
