import joi from 'joi'
import { validateSchema } from '../../client/src/common.js'

export const userValidationSchema = async (reqBody) => {
  try {
    const schema = joi.object({
      name: joi.string().required(),
      email: joi.string().required().email(),
      password: joi.string().required(),
    })
    validateSchema(reqBody, schema)
  } catch (error) {
    throw error
  }
}

export const loginValidationSchema = async (reqBody) => {
  try {
    const schema = joi.object({
      email: joi.string().required().email(),
      password: joi.string().required(),
    })
    validateSchema(reqBody, schema)
  } catch (error) {
    throw error
  }
}

export const getProfileValidationSchema = async (reqBody) => {
  try {
    const schema = joi.object({
      email: joi.string().required().email(),
    })
    validateSchema(reqBody, schema)
  } catch (error) {
    throw error
  }
}

export const uploadByLinkSchema = async (reqBody) => {
  try {
    const schema = joi.object({
      uploadLink: joi.string().required(),
    })
    validateSchema(reqBody, schema)
  } catch (error) {
    throw error
  }
}
