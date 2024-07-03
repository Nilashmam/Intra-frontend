import {React , useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Logout from '../components/logout'
import '../App.css'


const linkInput = () => {
    
    const navigate = useNavigate()
    const [userData,setUserData] = useState({
        url : ''
    })
    let redirect = () => {
      
        navigate(`/dashboard/${userData.url}`)
        
    }


  return (
    <div>
        <div align="center">
           <h3>Enter the link provded by the interviewer interview</h3>
           <Logout/>
            <form onSubmit={redirect} style={{width:'26%'}} className='formStyle'>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                Url :  <input className='inputStyle' type="text" name="link" value={userData.url} onChange={(e) => setUserData({...userData, url : e.target.value })}/>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="submit" className='submit-button'>Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
           </div>
    </div>
  )
}

export default linkInput