import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from "../context/AuthContext"

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("ลงชื่อเข้าใช้ผิดพลาดโปรดลองใหม่อีกครั้ง")
            setLoading(false)
        }

    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>อีเมล์</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>รหัสผ่าน</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>

                        <Button disabled={loading} className="w-100 mt-3  " type="submit" >ล็อคอิน</Button>
                    </Form>
                    {/*<div className="w-100 text-center mt-3">
                        <Link to="/forgot-password">ลืมรหัสผ่าน ?</Link>
                    </div>*/} 
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2 text-white">
                ยังไม่มีบัญชีผู้ใช้ ? <Link to="/signup">Sign Up</Link>
            </div>
        </>
    )
}
