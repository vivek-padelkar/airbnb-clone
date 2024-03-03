import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home.page'
import { Login } from './Pages/Login.page'
import Layout from './Layout/Layout'
import Register from './Pages/Register.page'
import PageNotFound from './Pages/PageNotFound.page'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
        transition:Bounce
      />
    </>
  )
}

export default App
