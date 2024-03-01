import bcrypt from 'bcryptjs'

export const encryptPassword = async (password) => {
  const salt = bcrypt.genSaltSync(10)
  const encryptedPassword = bcrypt.hashSync(password, salt)
  return encryptedPassword
}
