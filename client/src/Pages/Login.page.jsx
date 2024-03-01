const SECRET_KEY = import.meta.env.VITE_SECRET_KEY
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import CryptoJS from 'crypto-js'
import { AXIOS_HEADER } from '../constants/constants'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function clearFields() {
    setEmail('')
    setPassword('')
  }
  const userLogin = async (e) => {
    try {
      e.preventDefault()
      const requestBody = {
        email,
        password,
      }
      var encryptedRequestBody = CryptoJS.AES.encrypt(
        JSON.stringify(requestBody),
        SECRET_KEY
      ).toString()
      const { data } = await axios.post(
        '/user/login',
        { data: encryptedRequestBody },
        AXIOS_HEADER
      )
      console.log(JSON.stringify(data))
      toast.success(data?.message)
      clearFields()
      navigate('/')
    } catch (error) {
      toast.error(error.message || error)
    }
  }
  return (
    <div className="mt-20 mx-auto">
      <h1 className="mb-3 text-center text-4xl">Login</h1>
      <form
        onSubmit={userLogin}
        className="max-w-md mx-auto gap-4 flex flex-col  justify-center align-middle"
      >
        <input
          type="email"
          placeholder="your@mail.com"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="mt-2 bg-primary p-2 text-white rounded-full">
          Login
        </button>
        <div className="text-center p-2">
          Don't have an account yet?{' '}
          <Link to={'/register'} className="font-medium underline">
            Register here
          </Link>
        </div>
      </form>
    </div>
  )
}
