import express from 'express'
import {
  registerUser,
  loginUser,
  profileDetails,
} from '../controller/user.controller.js'
import { decrypt } from '../middleware/encrypt.middleware.js'
const Router = express.Router()
import { authenticateToken } from '../utils/utils.js'

Router.route('/login').post(decrypt, loginUser)
Router.route('/register').post(decrypt, registerUser)
Router.route('/profile').get(decrypt, authenticateToken, profileDetails)

export default Router
