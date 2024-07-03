import React, { useContext } from 'react';
import { Route, Navigate , Outlet,Routes } from 'react-router-dom';
import userContext from '../context/userContext';



const interviewerRoute = () => {
    const  {user}  = useContext(userContext);
    if(user.type == "Interviewer"){
                return (<Outlet/>)
    }
    else {
        return (<Navigate to='/login'/>)
    }
}

export default interviewerRoute