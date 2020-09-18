import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import InputForm from '../InputForm/InputForm'
import Message from './Message'
import { SocketContext } from '../Socket/Socket'

const ChatRoom = () => {
  const messages = useSelector(state => state.messages)
  const socket = useContext(SocketContext)

  return (
    <section>
      <div className="overflow-y-auto">
        {messages.map((x, i) => <Message {...x} key={`${x.user}-${i}`} />)}
      </div>
      <InputForm onSubmit={socket.sendMessage} submit="Send" />
    </section>
  )
}

export default ChatRoom
