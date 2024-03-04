import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import UserModel from '../models/User.js'
import {
  loginValidationSchema,
  userValidationSchema,
} from '../validation/user.validation.js'

import { errorhandler, successhandler } from '../utils/responseHandler.js'

export const registerUser = async (req, res) => {
  try {
    await userValidationSchema(req.data)
    const { name, email, password } = req.data
    const response = await getUserRegitser(name, email, password)
    if (response) {
      successhandler(200, 'User register successfully', response, res)
    }
  } catch (error) {
    errorhandler(500, error, res)
  }
}

export const loginUser = async (req, res) => {
  try {
    await loginValidationSchema(req.data)
    const { email, password } = req.data
    const response = await getUserlogin(email, password)
    if (response) {
      jwt.sign(
        { email: response.email, id: response._id },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw Error('Error while sigining the')
          successhandler(200, 'User Logged successfully', {}, res, token)
        }
      )
    }
  } catch (error) {
    errorhandler(500, error, res)
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
