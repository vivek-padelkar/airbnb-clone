import jwt from 'jsonwebtoken'
export const getToken = async (data) => {
  try {
    const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '1d' })
    return token
  } catch (error) {
    throw Error('Error while generating token:' + error.message || error)
  }
}
