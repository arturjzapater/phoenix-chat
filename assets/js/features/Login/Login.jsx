import React from 'react'
import { useDispatch } from 'react-redux'
import InputForm from '../InputForm/InputForm'
import { addUsername } from './LoginActions'

const Login = () => {
  const dispatch = useDispatch()

  return (
    <section>
      <p>Please, input a username:</p>
      <InputForm
        onSubmit={user => dispatch(addUsername(user))}
        submit="Log in"
      />
    </section>
  )
}

export default Login
