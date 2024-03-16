import { useEffect, useState } from 'react'
import * as userAction from '../actions/user.action'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Pages/Message.page'
import Error from './Message.page'

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const userState = useSelector((state) => state.userLogin)

  useEffect(() => {
    if (userState?.userInfo) {
      navigate('/')
    }
  }, [userState])

  function clearFields() {
    setEmail('')
    setPassword('')
  }
  const userLogin = (e) => {
    try {
      e.preventDefault()
      const requestBody = {
        email,
        password,
      }
      dispatch(userAction.login(requestBody))
    } catch (error) {
      toast.error(
        error?.response?.data?.message || 'Something went wrong try again !'
      )
    }
  }
  console.log('printing=' + JSON.stringify(userState))
  return (
    <>
      {userState?.error && <Message message={userState.error} />}
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
    </>
  )
}
