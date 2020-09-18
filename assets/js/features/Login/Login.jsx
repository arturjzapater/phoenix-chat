import React from 'react'
import { useDispatch } from 'react-redux'
import InputForm from '../InputForm/InputForm'
import { addUsername } from './LoginActions'

const Login = () => {
  const dispatch = useDispatch()

  return (
    <section className="m-20 p-4 border border-gray-200 md:w-3/5 lg:w-2/5">
      <p className="mx-2">Please, input a username:</p>
      <InputForm
        className="flex-col"
        onSubmit={user => dispatch(addUsername(user))}
        submit="Log in"
        validate={true}
      />
    </section>
  )
}

export default Login
