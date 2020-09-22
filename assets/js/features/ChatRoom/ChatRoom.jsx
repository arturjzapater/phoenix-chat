import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import InputForm from '../InputForm/InputForm'
import Message from './Message'
import useChannel from '../Socket/useChannel'

const scrollToElementRef = ({ current }) => {
  current.scrollIntoView({ behavior: 'smooth' })
}

const ChatRoom = () => {
  const messages = useSelector(state => state.messages)
  const msgEndRef = useRef(null)
  const channel = useChannel('room:lobby')

  useEffect(() => scrollToElementRef(msgEndRef), [ messages ])

  return (
    <section className="mx-2 my-4 flex-grow flex flex-col justify-between">
      <div className="overflow-y-auto mx-6 h-v-80">
        {messages.map((x, i) => <Message {...x} key={`${x.user}-${i}`} />)}
        <div ref={msgEndRef} />
      </div>
      <InputForm onSubmit={channel.sendMessage} submit="Send" />
    </section>
  )
}

export default ChatRoom
