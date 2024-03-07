import jwt from 'jsonwebtoken'
export const getToken = async (data) => {
  try {
    const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '1d' })
    return token
  } catch (error) {
    throw Error('Error while generating token:' + error.message || error)
  }
}

export function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401) // Unauthorized

  // Verify and validate the token (e.g., using JWT)
  // Example with JWT:
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403) // Forbidden
    req.user = user
    next()
  })
}
