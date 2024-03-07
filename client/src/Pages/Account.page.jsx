import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../user.context'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
const Account = () => {
  const navigate = useNavigate()
  const { user, ready, isToken } = useContext(UserContext)
  if (!isToken) {
    return <Navigate to="/login" />
  }
  if (!ready) return <div>Loadiing.. please wait</div>
  return (
    <div>
      <nav className="m-full flex mt-10 gap-4">
        <Link className="py-2 px-4 bg-gray-300 rounded-full">My Profile</Link>
        <Link
          className="py-2 px-4 bg-gray-300 rounded-full"
          to="/account/bookings"
        >
          My Bookings
        </Link>
        <Link className="py-2 px-4" to="/account/places">
          My accomondations
        </Link>
      </nav>
    </div>
  )
}

export default Account
