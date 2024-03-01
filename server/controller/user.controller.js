import UserModel from '../models/User.js'
import {
  loginValidationSchema,
  userValidationSchema,
} from '../validation/user.validation.js'
import { decrypt } from '../middleware/encrypt.js'
import bcrypt from 'bcryptjs'

export const registerUser = async (req, res) => {
  try {
    if (req.body.data) {
      let decrypedBody = decrypt(req.body.data)
      decrypedBody = JSON.parse(decrypedBody)
      await userValidationSchema(decrypedBody)
      const { name, email, password } = decrypedBody
      const response = await getUserRegitser(name, email, password)
      if (response) {
        res.send({
          message: 'User register successfully',
          userData: response,
        })
      }
    } else {
      throw Error('Schema missmacth')
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || error,
      status: 500,
    })
  }
}
5
export const loginUser = async (req, res) => {
  try {
    if (req.body.data) {
      let decrypedBody = decrypt(req.body.data)
      decrypedBody = JSON.parse(decrypedBody)
      await loginValidationSchema(decrypedBody)
      const { email, password } = decrypedBody
      const response = await getUserlogin(email, password)
      if (response) {
        res.send({
          message: 'User register successfully',
          userData: response,
        })
      }
    } else {
      throw Error('Schema missmacth')
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || error,
      status: 500,
    })
  }
}

const getUserRegitser = async (name, email, password) => {
  try {
    const data = await UserModel.findOne({ email })
    if (data) {
      throw Error('User is Already exisited with same Email')
    } else {
      const bcryptSalt = await bcrypt.genSalt(10)
      password = bcrypt.hashSync(password, bcryptSalt)
      let userResponse = await UserModel.create({ name, email, password })
      userResponse = userResponse.toObject()
      delete userResponse.password
      return userResponse
    }
  } catch (error) {
    throw error
  }
}

const getUserlogin = async (email, password) => {
  try {
    const user = await UserModel.findOne({ email })
    if (user) {
      const data = bcrypt.compareSync(password, user.password) // true
      return user.toObject()
    } else {
      throw Error('Invalid email or password combination!')
    }
  } catch (error) {
    throw error
  }
}
