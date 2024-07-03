import {React , useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import { useNavigate } from 'react-router-dom'
import Logout from '../components/logout'
import '../App.css'


const nameInput = () => {
    const navigate = useNavigate()
    const [userData,setUserData] = useState({
        username : ''
    })
    const redirect = () => {

        const urlCode = uuidv4().replace(/-/g, '').substring(0,8);
        navigate(`/receiver/${urlCode}/${userData.username}`)

    }

    return (
        <div>
        <div align="center">
            <Logout />
            <h1>Enter the username of the candidate you want to take interview</h1>
            <form onSubmit={redirect} className='formStyle' style={{ width: '27%' }}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <p style={{ fontSize: '20px' }}>Username: </p>
                            </td>
                            <td style={{paddingRight:'20px'}}>
                                <input
                                    className="inputStyle"
                                    type="text"
                                    name="username"
                                    value={userData.username}
                                    onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <div style={{ textAlign: 'right'}}>
                                    <button className='submit-button' style={{ width: '115%'}}type="submit">Submit</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    </div>
    )
}

export default nameInput