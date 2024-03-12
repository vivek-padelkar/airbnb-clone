import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/user.action'

const Account = () => {
  const navigate = useNavigate()
  let { subpage } = useParams()
  const dispatch = useDispatch()

  if (subpage === undefined) subpage = 'account'
  const userState = useSelector((state) => state.userLogin)

  console.log(userState.userInfo.name)
  useEffect(() => {
    console.log(' i am running multiple times')
    if (!userState?.userInfo) {
      navigate('/login')
    }
  }, [])

  // const subPage = 'account'
  function getActiveClass(type = null) {
    if (type === subpage) {
      return 'bg-primary text-white'
    } else {
      return ''
    }
  }

  const handleLogout = () => {
    console.log('i am logout')
    dispatch(logout())
    navigate('/')
  }

  return (
    <div>
      <nav className="m-full flex justify-center mt-10 gap-4 mb-8">
        <Link
          className={`py-2 px-4 ${getActiveClass('account')} rounded-full`}
          to="/account"
        >
          My Profile
        </Link>
        <Link
          className={`py-2 px-4 ${getActiveClass('bookings')} rounded-full`}
          to="/account/bookings"
        >
          My Bookings
        </Link>
        <Link
          className={`py-2 px-4 ${getActiveClass('places')} rounded-full`}
          to="/account/places"
        >
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
    </div>
  )
}

export default Account
