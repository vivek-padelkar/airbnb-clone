import { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axiosInstance from './utils/axiosConfig'

export const UserContext = createContext({})

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null)
  const [ready, setReady] = useState(false)
  const [isToken, setIsToken] = useState(false)

  const getProfileDetails = async (token) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
      const { data } = await axiosInstance.get(`/user/profile`, config)
      setUser(data?.data)
      setReady(true)
      setIsToken(true)
    } catch (error) {
      toast.error('Error while fetching data from getProfileDetails')
    }
  }
  useEffect(() => {
    try {
      const token = localStorage.getItem('token')
      if (token) setIsToken(true)
      if (!token) {
        setIsToken(false)
      } else if (!user && token) {
        getProfileDetails(token)
      }
    } catch (error) {
      toast.error('Error while fetching user Details in Context')
    }
  }, [])
  return (
    <UserContext.Provider
      value={{ user, setUser, ready, setReady, isToken, setIsToken }}
    >
      {children}
    </UserContext.Provider>
  )
}
