import express from 'express'
import { registerUser, loginUser } from '../controller/user.controller.js'
import { decrypt } from '../middleware/encrypt.middleware.js'
const Router = express.Router()

Router.route('/register').post(decrypt, registerUser)
Router.route('/login').post(decrypt, loginUser)

export default Router
