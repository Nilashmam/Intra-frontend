import React, { useContext } from 'react'
import {useState} from "react"
import axios from 'axios'
import {useNavigate , Navigate} from 'react-router-dom'
import userContext from '../context/userContext'


const register = () => {


    const navigate = useNavigate();
    const [userData,setUserData] = useState({

        username : '',
        first_name : '',
        last_name : '',
        email : '',
        password : '',
        userType : ''
    })
    let {user} = useContext(userContext)
    
    const registerUser = (e) => {
          e.preventDefault()
          console.log(userData)
          axios.post('https://intra-backend.onrender.com',userData)
          .then(
            response => console.log(response),
            navigate('/login')
            )
          .catch(err => console.log(err))
    }


    return user ? (
        <Navigate to='/dashboard'/>
    ) : (
        <div>
            <div align="center">
            <form onSubmit={registerUser}>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            UserName : <input type="text" name="username" value={userData.username} onChange={(e) => setUserData({...userData, username : e.target.value })}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            First_Name : <input type="text" name="first_name" value={userData.first_name} onChange={(e) => setUserData({...userData, first_name : e.target.value })}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Last_Name : <input type="text" name="last_name" value={userData.last_name} onChange={(e) => setUserData({...userData, last_name : e.target.value })}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Email : <input type="email" name="email" value={userData.email} onChange={(e) => setUserData({...userData, email : e.target.value })}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Password : <input type="password" name="password" value={userData.password} onChange={(e) => setUserData({...userData, password : e.target.value })}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                           <input type="radio" id="userType" name="userType" onClick={ (e) => setUserData({...userData,userType : "Candidate"})}/>
                           <label for="userType">Candidate</label>
                           <input type="radio" id="userType" name="userType" onClick={ (e) => setUserData({...userData,userType : "Interviewer"})}/>
                           <label for="userType">Interviewer</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="submit">Submit</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
            </div>
        </div>
    );
}

export default register