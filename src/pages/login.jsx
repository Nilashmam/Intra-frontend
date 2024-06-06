import React, { useContext } from 'react'
import { useState } from "react"
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import userContext from '../context/userContext'
import {jwtDecode} from 'jwt-decode';


const login = () => {
    let {loginUser} = useContext(userContext)
    let {user} = useContext(userContext)

    return user ? (
        <Navigate to="/dashboard"/>
    ) : (
        <div>
            <div align="center">
                <form onSubmit={loginUser}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    Username : <input type="text" name="username"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Password : <input type="password" name="password" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="submit" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );

};

export default login