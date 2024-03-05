import React from 'react'
import { UserContext } from '../user.context'
import { useContext } from 'react'

const Home = () => {
  const { user } = useContext(UserContext)
  return <div> {`Welcome to VoyageViks ${user?.name || 'user'}!`}</div>
}

export default Home
