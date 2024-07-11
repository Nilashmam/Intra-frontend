import React from 'react'
import { useState , useContext } from "react"
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import userContext from '../context/userContext'
import {jwtDecode} from 'jwt-decode';
import '../App.css'




const redirector = () => {


    let {loginUser} = useContext(userContext)
    let {user} = useContext(userContext)


  return user.type == 'Candidate' ? (
    
    <Navigate to="/linkInput" />
  ) : (
    <Navigate to="/receiverDashboard" />
  )
}

export default redirector