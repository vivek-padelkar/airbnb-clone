import { useRef, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AXIOS_HEADER } from '../constants/constants'
import PasswordCheckList from '../components/PasswordCheckList'
import CryptoJS from 'crypto-js'
const SECRET_KEY = import.meta.env.VITE_SECRET_KEY
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../utils/axiosConfig'

const Register = () => {
  const navigate = useNavigate()
  const refBtnPassword = useRef()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassWord, setConfimPassword] = useState('')
  const [pwdChk, setPwdChk] = useState(false)

  const registerUser = async (e) => {
    try {
      e.preventDefault()
      if (!pwdChk) {
        console.log('i am inside')
        toast.error('Please check your password')
        refBtnPassword.current.focus()
        return
      }

      const requestBody = {
        name,
        email,
        password,
      }
      var encryptedRequestBody = CryptoJS.AES.encrypt(
        JSON.stringify(requestBody),
        SECRET_KEY
      ).toString()

      const { data } = await axiosInstance.post(
        '/user/register',
        requestBody,
        AXIOS_HEADER
      )

      console.log(JSON.stringify(data))
      toast.success(data?.message)
      clearFields()
      navigate('/login')
    } catch (error) {
      toast.error(
        error?.response?.data?.message || 'Something went wrong try again !'
      )
      clearFields()
    }
  }

  function clearFields() {
    setName('')
    setEmail('')
    setPassword('')
    setConfimPassword('')
  }

  return (
    <div>
      <div className="mt-20 mx-auto">
        <h1 className="mb-3 text-center text-4xl">Register</h1>
        <form
          onSubmit={registerUser}
          className="max-w-md mx-auto gap-4 flex flex-col  justify-center align-middle"
        >
          <input
            type="name"
            placeholder="john dove"
            onChange={(e) => {
              setName(e.target.value)
            }}
            value={name}
            required
          />
          <input
            type="email"
            placeholder="your@mail.com"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            value={email}
            required
          />
          <input
            type="password"
            ref={refBtnPassword}
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            value={password}
            required
          />
          <input
            type="password"
            placeholder="retype-password"
            onChange={(e) => {
              setConfimPassword(e.target.value)
            }}
            value={confirmPassWord}
            required
          />
          <PasswordCheckList
            password={password}
            confirmPassWord={confirmPassWord}
            setPwdChk={setPwdChk}
          />

          <button className="mt-2 bg-primary p-2 text-white rounded-full">
            Register
          </button>
          <div className="text-center p-2">
            Already have an account? {` `}
            <Link to={'/login'} className="font-medium underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
