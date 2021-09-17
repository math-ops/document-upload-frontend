import React from 'react'
import './login.css'
import { Form, Input, Label, Button, Check, Alert } from './login'

export default function Login(){
  const error = 'Credenciais Inválidas!';
  return(
    <>
      <Form className="form">
        <Label className="name">Username</Label>
        <Input className="name-input" type="text" placeholder="Username"/>

        <Label className="password">Password</Label>
        <Input className="pass-input" type="password" placeholder="Password"/>

        <Check className="check" type="checkbox"/>
        <Label className="remember">Remember me</Label>
        <Button className="button">Login</Button>
        <Alert className="alert">{error}</Alert>
      </Form>
      
    </>
  )
}