import {React , useContext} from 'react'
import userContext from '../context/userContext'
import '../App.css'


const logout = () => {

  const {logoutUser} = useContext(userContext)
  return (
    <>
    <button onClick={logoutUser} style={{ fontSize: '20px' , position: 'absolute', top: '15px', right: '15px', padding: '15px', borderRadius: '5px', border: '2px Solid black'}}>Logout</button>
    </>
  )
}

export default logout