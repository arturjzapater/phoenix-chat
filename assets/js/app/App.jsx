import React from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'
import If from '../features/If/If'
import Login from '../features/Login/Login'
import Main from './Main'

const App = () => {
  const user = useSelector(state => state.user)

  return (
    <>
      <Header />
      <If 
        cond={!user}
        then={<Login />}
        else={<Main />}
      />
    </>
  )
}

export default App
