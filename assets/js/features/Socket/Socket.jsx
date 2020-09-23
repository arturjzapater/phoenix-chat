import { Socket } from 'phoenix'
import React, { createContext, useEffect, useState } from 'react'

const SocketContext = createContext(null)

const SocketProvider = ({ children }) => {
  const [ socket, setSocket ] = useState()

  useEffect(() => {
    if (!socket) {
      const socketConnection = new Socket('/socket')
      socketConnection.connect()
      setSocket(socketConnection)
    }
  })

  if (!socket) return null

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  )
}

export default SocketProvider

export { SocketContext }
