import { spiral } from 'ldrs'

const Loader = () => {
  spiral.register() // Default values shown
  return (
    <div className="loaderContainer">
      <l-spiral size="50" speed="0.9" color="#FF395D"></l-spiral>
    </div>
  )
}

export default Loader
