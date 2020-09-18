import React, { useContext, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import InputForm from '../InputForm/InputForm'
import Message from './Message'
import { SocketContext } from '../Socket/Socket'

const ChatRoom = () => {
  const messages = useSelector(state => state.messages)
  const msgEndRef = useRef(null)
  const socket = useContext(SocketContext)

  useEffect(() => {
    msgEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [ messages ])

  return (
    <section className="mx-2 my-6 flex-grow flex flex-col justify-between">
      <div className="overflow-y-auto mx-6 h-v-80">
        {messages.map((x, i) => <Message {...x} key={`${x.user}-${i}`} />)}
        <div ref={msgEndRef} />
      </div>
      <InputForm onSubmit={socket.sendMessage} submit="Send" />
    </section>
  )
}

export default ChatRoom
