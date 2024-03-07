import { useState } from 'react'
import * as userAction from '../actions/user.action'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'

export const Login = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const testState = useSelector((state) => state)

  console.log('testing' + JSON.stringify(testState))
  // console.log('loading' + loading)

  console
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

      console.log('After dispatch' + JSON.stringify(state))
      // const { data } = await axiosInstance.post(
      //   '/user/login',
      //   requestBody,
      //   AXIOS_HEADER
      // )

      // setUser(data?.data)
      // setReady(true)
      // setIsToken(true)
      // toast.success(data?.message)
      // clearFields()
      // setLoading(false)
      // navigate('/')
    } catch (error) {
      toast.error(
        error?.response?.data?.message || 'Something went wrong try again !'
      )
    }
  }

  // if (loading) return <Loader />

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
