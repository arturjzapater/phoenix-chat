import React from 'react'
import { useSelector } from 'react-redux'
import ChatRoom from '../features/ChatRoom/ChatRoom'
import Header from './Header'
import If from '../features/If/If'
import Login from '../features/Login/Login'

const App = () => {
  const user = useSelector(state => state.user)

  return (
    <>
      <Header />
      <If 
        cond={!user}
        then={<Login />}
        else={<ChatRoom />}
      />
    </>
  )
}

export default App
