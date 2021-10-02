import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from "../context/AuthContext"
import { Link, useHistory } from 'react-router-dom'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const phoneNumberRef = useRef()
    const { signup  } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    async function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("รหัสผ่านของคุณไม่ถูกต้อง")
        }
        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("สร้างบัญชีผู้ใช้ล้มเหลว")
            setLoading(false)
        }

    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
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
                        <Form.Group id="password-confirm">
                            <Form.Label>ยืนยันรหัสผ่าน</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Form.Group id="phone-number">
                            <Form.Label>เบอร์โทรศัพท์</Form.Label>
                            <Form.Control type="phone-number" ref={phoneNumberRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w100 mt-3" type="submit" >ลงทะเบียน</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2 text-white">
                มีบัญชีผู้ใช้อยู่แล้ว ? <Link to="/login">Log In</Link>
            </div>
        </>
    )
}



