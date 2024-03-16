import bcrypt from 'bcryptjs'
import path from 'path'
import { fileURLToPath } from 'url'
import download from 'image-downloader'
import UserModel from '../models/User.js'
import {
  loginValidationSchema,
  userValidationSchema,
  uploadByLinkSchema,
} from '../validation/user.validation.js'
import { getToken } from '../utils/utils.js'
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
      const token = await getToken({
        name: response.name,
        email: response.email,
        id: response._id,
      })
      successhandler(
        200,
        'User Logged successfully',
        { name: response.name, email: response.email, id: response._id, token },
        res
      )
    }
  } catch (error) {
    errorhandler(500, error, res)
  }
}

export const profileDetails = async (req, res) => {
  try {
    const email = req.user.email
    const response = await getProfileDetails(email)
    successhandler(200, '', response, res)
  } catch (error) {
    errorhandler(500, error, res)
  }
}

export const getProfileDetails = async (email) => {
  try {
    const response = await UserModel.findOne({ email }).select('-password')
    if (response) {
      return response.toObject()
    } else {
      throw Error('Data not found')
    }
  } catch (error) {
    throw Error(error.message || message)
  }
}

export const uploadByLink = async (req, res) => {
  try {
    await uploadByLinkSchema(req.data)
    const { uploadLink } = req.data
    const imageName = `${Date.now()}.jpg`
    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    let dest = path.resolve(__dirname, '..', './uploads')
    dest = `${dest}/${imageName}`
    await download.image({
      url: uploadLink,
      dest,
    })
    successhandler(200, '', { imageName }, res)
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
      if (!data) throw Error('Invalid email or password combination!')
      return user.toObject()
    } else {
      throw Error('Invalid email or password combination!')
    }
  } catch (error) {
    throw error
  }
}
