import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import {
  registerUser,
  loginUser,
  profileDetails,
  uploadByLink,
} from '../controller/user.controller.js'
import { decrypt } from '../middleware/encrypt.middleware.js'
const Router = express.Router()
import { authenticateToken } from '../utils/utils.js'

Router.route('/login').post(decrypt, loginUser)
Router.route('/register').post(decrypt, registerUser)
Router.route('/profile').get(decrypt, authenticateToken, profileDetails)
Router.route('/upload-by-link').post(decrypt, authenticateToken, uploadByLink)

export default Router
