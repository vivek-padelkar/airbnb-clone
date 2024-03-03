import { Link } from 'react-router-dom'
import Logo from '/images/logo.png'
const PageNotFound = () => {
  return (
    <div className="pageNotfoundLogo-container">
      <div
        className="pageNotfoundLogo__msg-container
      text-white flex align-middle justify-center flex-col text-center gap-5"
      >
        <h4 className="text-4xl z-10">This Page Has Gone Off The Grid.</h4>
        <div className="404-container flex align-middle justify-center">
          <h5 className="text-9xl">4</h5>
          <img
            className="pageNotfoundLogo"
            src={Logo}
            title="404 page not found"
          />
          <h5 className="text-9xl">4</h5>
        </div>
        {/* <h5 className="text-9xl">404</h5> */}
        <h4>Page cannot be found</h4>
        <Link
          to="/"
          className="btnPageNoFound bg-white 
        font-bold w-32 p-2 mx-auto text-black
        rounded"
        >
          Back to home
        </Link>
      </div>

      <div className="darkened-image" />
    </div>
  )
}

export default PageNotFound
