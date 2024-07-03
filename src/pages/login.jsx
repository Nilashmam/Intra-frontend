import React, { useContext } from 'react'
import { useState } from "react"
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import userContext from '../context/userContext'
import {jwtDecode} from 'jwt-decode';
import '../App.css'

const login = () => {
    let {loginUser} = useContext(userContext)
    let {user} = useContext(userContext)

    if(user)
        {
            if(user.type == "Candidate")
                {
                    return <Navigate to="/linkInput"/>
                }
            else if(user.type == "Interviewer")
                {
                    return <Navigate to="/receiverDashboard"/>
                }
        }
    else
    {
        return (
            <div>
            <div align="center">
                <form onSubmit={loginUser} className='formStyle'>
                    <table>
                        <tbody>
                            <td className='tdStyle'>
                                <tr>
                                    <img className='imgStyle' src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/employees-users-icon.png"/>
                                </tr>
                            </td>
                            <td className='tdStyle'>
                            <tr>
                                <td className='tdStyle'>
                                    Username  <input className='inputStyle' type="text" name="username"/>
                                </td>
                            </tr>
                            <tr>
                                <td className='tdStyle'>
                                    Password  <input className='inputStyle' type="password" name="password" />
                                </td>
                            </tr>
                            <tr>
                                <td className='tdStyle'>
                                    <input type="submit" className='submit-button'/>
                                </td >
                            </tr>
                            </td>

                        </tbody>
                    </table>
                </form>
            </div>
        </div>
        )
    }


};

export default login