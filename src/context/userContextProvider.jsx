import React, { useState } from 'react'
import userContext from './userContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {jwtDecode} from 'jwt-decode';



const userContextProvider = ({children}) => {
  
  let [authToken,setAuthToken] = useState(localStorage.getItem('accessToken') ? JSON.parse(localStorage.getItem('accessToken')) : null)
  let [user,setUser] = useState(localStorage.getItem('accessToken') ? jwtDecode(JSON.parse(localStorage.getItem('accessToken'))) : null)
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    axios.post('http://localhost:5000/user/login', { 'username': username.value, 'password': password.value })
        .then(response => {
            console.log(response);
            if (response.status === 200) {
                setUser({id : jwtDecode(response.data.token),username : username.value});
                setAuthToken(response.data.token)
                console.log(jwtDecode(response.data.token).username)
                localStorage.setItem('accessToken',JSON.stringify(response.data.token))
            }
        })
        .catch(err => console.log(err));
}
    
  const logoutUser = () => {
      setAuthToken(null),
      setUser(null),
      localStorage.removeItem('accessToken')
      navigate('/login')
}


  let contextData = {

    loginUser : loginUser,
    user : user,
    logoutUser : logoutUser
  }
  return (
    <userContext.Provider value={contextData}>
        {children}
    </userContext.Provider>
  )
}



export default userContextProvider