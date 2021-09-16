import React from 'react'
import { Title, Form, Input, Label, Button, Check, Alert } from './login'

export default function Login(){
  const error = 'Credênciais Inválidas!';
  return(
    <>
      <Title>Bem Vindo(a)!</Title>
      <Form>
        <Label>Username</Label>
        <Input type="text" />

        <Label>Password</Label>
        <Input type="password"/>

        <Check type="checkbox"/>
        <Label>Remember me</Label>
        <Button>Login</Button>
      </Form>
      <Alert>{error}</Alert>
    </>
  )
}