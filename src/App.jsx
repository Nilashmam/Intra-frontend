import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import Home from '../src/pages/home'
import Register from '../src/pages/register'
import Login from './pages/login'
import Profile from './pages/profile'
import Dashboard from './pages/dashboard'
import UserContextProvider from './context/userContextProvider'
import PrivateRoute from './components/privateRoute';
import InterviewerRoute from './components/interviewerRoute'
import ReceiverDashboard from './pages/receiverDashboard'
import NameInput from './pages/nameInput'
import LinkInput from './pages/linkInput'
function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login/>} />
        <Route element={<PrivateRoute />}>
          <Route path="/linkInput" element={<LinkInput/>}/>
          <Route path='/dashboard/:urlCode' element={<Dashboard />} />
        </Route>
        <Route element={<InterviewerRoute />}>
          <Route path='/receiver/:urlCode/:userName' element={<ReceiverDashboard/>}/>
          <Route path='/receiverDashboard' element={<NameInput/>}/>
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
