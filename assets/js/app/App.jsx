import React from 'react'
import { useSelector } from 'react-redux'
import ChatRoom from '../features/ChatRoom/ChatRoom'
import If from '../features/If/If'
import Login from '../features/Login/Login'

const App = () => {
  const user = useSelector(state => state.user)

  return (
    <div className="bg-purple-900 text-gray-100">
      <If 
        cond={!user}
        then={<Login />}
        else={<ChatRoom />}
      />
    </div>
  )
}

export default App
