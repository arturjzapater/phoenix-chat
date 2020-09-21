import React, { createContext, useEffect, useState } from 'react'
import { Socket } from 'phoenix'
// import { useDispatch, useSelector } from 'react-redux'
// import { receiveMessage, systemMessage } from './SocketActions'

const SocketContext = createContext(null)

const SocketProvider = ({ children }) => {
  const [ socket, setSocket ] = useState()
  // const user = useSelector(state => state.user)
  // const dispatch = useDispatch()

  useEffect(() => {
    if (!socket) {
      const socketConnection = new Socket('/socket')
      socketConnection.connect()
      setSocket(socketConnection)
    }
  })

  if (!socket) return null

  // let socket
  // let channel
  // let context

  // if (user && !socket) {
  //   socket = new Socket('/socket', { params: { user } })
  //   socket.connect()

  //   channel = socket.channel('room:lobby')
  //   channel.join()
  //     .receive('ok', res => console.log('Joined successfully!', res))
  //     .receive('error', res => console.log('Oopsies!', res))

  //   channel.on('new_message', ({ message, user }) => dispatch(receiveMessage(message, user)))
  //   channel.on('user_joined', ({ user }) => dispatch(systemMessage(`${user} joined the conversation`)))

  //   const sendMessage = message => channel.push('new_message', { message })

  //   context = {
  //     socket,
  //     sendMessage,
  //   }
  // }

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  )
}

export default SocketProvider

export { SocketContext }
