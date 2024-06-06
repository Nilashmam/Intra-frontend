import React, { useContext } from 'react'
import userContext from '../context/userContext'
import Code from '../components/editor'



const dashboard = () => {

  let {logoutUser} = useContext(userContext)
  let {user} = useContext(userContext)

  return (
    <div>
      <button style={{ position: 'absolute', top: '15px', right: '15px' , padding : '10px' , borderRadius : '5px' , border : '2px Solid black' }} onClick={logoutUser}>Logout</button>
      dashboard {user.username} {user.userType}
      <div style={{alignItems : 'center'}}>
      <Code/>
      </div>
    </div>
  )
}

export default dashboard