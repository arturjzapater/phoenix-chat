import React from 'react'
import ChatRoom from '../features/ChatRoom/ChatRoom'
import UserList from '../features/UserList/UserList'

const Main = () => (
  <main className="flex flex-col md:flex-row">
    <ChatRoom />
    <UserList />
  </main>
)

export default Main
