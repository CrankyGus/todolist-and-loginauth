import React ,{useState} from 'react'
import { Card, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function Home() {
    const [error, setError] = useState('')
    const {currentUser, logout} = useAuth()
    const history = useHistory()

    async function handleLogout(){
        setError('')

        try{
            await logout()
            history.push("/login")
        }
        catch{
            setError("ออกจากระบบไม่สำเร็จ")
        }

    }
    
    return (
        <>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong> {currentUser.email}
            <Link to="/todo" className="btn btn-secondary w-100 mt-3">
              Todolist
            </Link>

            <Link to="/" className="btn btn-primary w-100 mt-3"onClick={handleLogout}>
              Logout
            </Link>
          </Card.Body>
        </Card>
        
      </>
    )
                
}
