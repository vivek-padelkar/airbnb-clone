import express from 'express'
import { registerUser, loginUser } from '../controller/user.controller.js'
const Router = express.Router()

Router.route('/register').post(registerUser)
Router.route('/login').post(loginUser)

export default Router
