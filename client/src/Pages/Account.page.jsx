import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/user.action'
import Places from './Places.page'

const Account = () => {
  const navigate = useNavigate()
  let { subpage } = useParams()
  const dispatch = useDispatch()

  if (subpage === undefined) subpage = 'account'
  const userState = useSelector((state) => state.userLogin)

  useEffect(() => {
    if (!userState?.userInfo) {
      navigate('/login')
    }
  }, [])

  function getActiveClass(type = null) {
    if (type === subpage) {
      return 'bg-primary text-white'
    } else {
      return ' bg-gray-200'
    }
  }

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <div>
      <nav className="m-full flex justify-center mt-10 gap-4 mb-8">
        {/* profile */}
        <Link
          className={`flex justify-center align-middle gap-1 py-2 px-4 ${getActiveClass(
            'account'
          )} rounded-full`}
          to="/account"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          My Profile
        </Link>

        {/* bookings */}
        <Link
          className={`flex justify-center align-middle gap-1 py-2 px-4 ${getActiveClass(
            'bookings'
          )} rounded-full`}
          to="/account/bookings"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            />
          </svg>
          My Bookings
        </Link>

        {/** accomdation */}
        <Link
          className={`flex justify-center align-middle gap-1 py-2 px-4 ${getActiveClass(
            'places'
          )} rounded-full`}
          to="/account/places"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          My accomondations
        </Link>
      </nav>

      {subpage === 'account' && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {userState.userInfo.name}
          <br />
          <button
            className="bg-primary text-white mt-2 w-24 p-2 rounded-full"
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>
      )}
      {subpage === 'places' && <Places />}
    </div>
  )
}

export default Account
