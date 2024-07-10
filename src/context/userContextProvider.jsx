import React, { useEffect, useState, useContext } from 'react';
import userContext from './userContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {jwtDecode } from 'jwt-decode'; 

const UserContextProvider = ({ children }) => {
    let [authToken, setAuthToken] = useState(localStorage.getItem('accessToken') ? JSON.parse(localStorage.getItem('accessToken')) : null);
    let [user, setUser] = useState(localStorage.getItem('accessToken') ? jwtDecode(JSON.parse(localStorage.getItem('accessToken'))) : null);
    const navigate = useNavigate();

    const loginUser = async (e) => {
        e.preventDefault();
        const { username, password } = e.target.elements;

        try {
            const response = await axios.post('https://intra-backend.onrender.com/user/login', {
                username: username.value,
                password: password.value
            });

            if (response.status === 200) {
                const token = response.data.token;
                const decodedToken = jwtDecode(token);
                setUser({ id: decodedToken.id, username: username.value, type: decodedToken.type });
                setAuthToken(token);
                localStorage.setItem('accessToken', JSON.stringify(token));
            }
        } catch (error) {
            console.log(error);
        }
    };

    const logoutUser = () => {
        setAuthToken(null);
        setUser(null);
        localStorage.removeItem('accessToken');
        navigate('/login');
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (authToken) {
                const decodedToken = jwtDecode(authToken);
                if (Date.now() >= decodedToken.exp * 1000) {
                    logoutUser();
                }
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [authToken, navigate]);

    let contextData = {
        loginUser: loginUser,
        user: user,
        logoutUser: logoutUser
    };

    return (
        <userContext.Provider value={contextData}>
            {children}
        </userContext.Provider>
    );
};

export default UserContextProvider;
