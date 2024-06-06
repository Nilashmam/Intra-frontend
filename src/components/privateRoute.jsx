import React, { useContext } from 'react';
import { Route, Navigate , Outlet,Routes } from 'react-router-dom';
import userContext from '../context/userContext';

const privateRoute = (path , element) => {
    const  {user}  = useContext(userContext);
    if(user){
        return (<Outlet/>)
    }
    else {
        return (<Navigate to='/login'/>)
    }
};

export default privateRoute;