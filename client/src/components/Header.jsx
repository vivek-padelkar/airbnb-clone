import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const userState = useSelector((state) => state.userLogin)
  return (
    <header className="flex justify-between">
      {/* LOGO */}
      <Link to="/">
        <div className="logo-container gap-1">
          <div className="logo-continer__wrapper">
            <img src={`images/logo.png`} className="logo-continer__logo" />
          </div>
          <span className="font-bold text-xl">VoyageViks</span>
        </div>
      </Link>

      {/* SEARCH BAR */}
      <div className="flex gap-2 align-middle justify-center border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
        <div className="">Anywhere</div>
        <div className="border-r border-gray-300" />
        <div>Any week</div>
        <div className="border-r border-gray-300" />
        <div>Add guest</div>
        <button className="bg-primary text-white rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* LOGIN */}
      <div className="flex gap-2 align-middle justify-center border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M2 3.75A.75.75 0 0 1 2.75 3h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75Zm0 4.167a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 4.166a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 4.167a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <Link to={userState?.userInfo?.name ? `/account` : '/login'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        {userState?.userInfo?.name || null}
      </div>
    </header>
  )
}

export default Header
