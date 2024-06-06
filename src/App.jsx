import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes,Route} from 'react-router-dom'
import Home from '../src/pages/home'
import Register from '../src/pages/register'
import Login from './pages/login'
import './App.css'
import Profile from './pages/profile'
import Dashboard from './pages/dashboard'
import UserContextProvider from './context/userContextProvider'
import PrivateRoute from './components/privateRoute';
import ReceiverDashboard from './pages/receiverDashboard'

function App() {

  return (
    <UserContextProvider>
    <Routes> 
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route element={<PrivateRoute/>}>
         <Route path='/dashboard' element={<Dashboard/>}/>
         <Route path='/receiver' element={<ReceiverDashboard/>}/>
      </Route>
    </Routes>
  </UserContextProvider>
  )
}

export default App
