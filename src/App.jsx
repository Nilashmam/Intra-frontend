import { Routes, Route , BrowserRouter as Router} from 'react-router-dom'
import Home from '../src/pages/home'
import Register from '../src/pages/register'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import UserContextProvider from './context/userContextProvider'
import PrivateRoute from './components/privateRoute';
import InterviewerRoute from './components/interviewerRoute'
import ReceiverDashboard from './pages/receiverDashboard'
import NameInput from './pages/nameInput'
import LinkInput from './pages/linkInput'
import Redirector from './pages/redirector'

function App() {

  return (
    <Router>
    <UserContextProvider>
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/redirector' element={<Redirector/>} />
          
          <Route element={<PrivateRoute />}>
            <Route path="/linkInput" element={<LinkInput />} />
            <Route path='/dashboard/:urlCode' element={<Dashboard />} />
          </Route>
          <Route element={<InterviewerRoute />}>
            <Route path='/receiver/:urlCode/:userName' element={<ReceiverDashboard />} />
            <Route path='/receiverDashboard' element={<NameInput />} />
          </Route>
        </Routes>
    </UserContextProvider>
    </Router>
  )
}

export default App
