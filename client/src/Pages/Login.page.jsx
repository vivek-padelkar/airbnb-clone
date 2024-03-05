const SECRET_KEY = import.meta.env.VITE_SECRET_KEY
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AXIOS_HEADER } from '../constants/constants'
import axiosInstance from '../utils/axiosConfig'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../user.context'

export const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setUser } = useContext(UserContext)
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
      const { data } = await axiosInstance.post(
        '/user/login',
        requestBody,
        AXIOS_HEADER
      )
      setUser(data?.data)
      toast.success(data?.message)
      clearFields()
      navigate('/')
    } catch (error) {
      toast.error(
        error?.response?.data?.message || 'Something went wrong try again !'
      )
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
