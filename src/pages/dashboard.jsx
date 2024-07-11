import React, { useContext } from 'react'
import userContext from '../context/userContext'
import Code from '../components/editor'
import Logout from '../components/logout'


const dashboard = () => {

  let {logoutUser} = useContext(userContext)
  let {user} = useContext(userContext)

  return (
    <div>
      <Logout/>
      <div>
      <Code/>
      </div>
    </div>
  )
}

export default dashboard