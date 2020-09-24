import { Presence } from 'phoenix'
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import InputForm from '../InputForm/InputForm'
import Message from './Message'
import useChannel from '../Socket/useChannel'
import InfoMessage from './InfoMessage'

const prop = key => obj => obj[key]

const messages = {
  '0': () => '',
  '1': ([ user ]) => `${user} is typing...`,
  '2': ([ first, second ]) => `${first} and ${second} are typing...`,
  '3': ([ first, second, third ]) => `${first}, ${second} and ${third} are typing...`,
  default: () => 'Several people are typing...',
}

const getTyping = (presences, currentUser) => {
  const typing = Presence
    .list(presences, (user, { metas: [{ typing }] }) => ({ user, typing }))
    .filter(({ user, typing }) => typing && user !== currentUser)
    .map(prop('user'))

  const makeMessage = messages[typing.length] || messages.default

  return makeMessage(typing)
}

const scrollToElementRef = ({ current }) => {
  current.scrollIntoView({ behavior: 'smooth' })
}

const ChatRoom = () => {
  const messages = useSelector(state => state.messages)
  const presences = useSelector(state => state.presences)
  const user = useSelector(state => state.user)
  const msgEndRef = useRef(null)
  const channel = useChannel('room:lobby')

  useEffect(() => scrollToElementRef(msgEndRef), [ messages ])

  return (
    <section className="mx-2 my-4 flex-grow flex flex-col justify-between">
      <div className="overflow-y-auto mx-4 h-v-75">
        {messages.map((x, i) => <Message {...x} key={`${x.user}-${i}`} />)}
        <div ref={msgEndRef} />
      </div>
      <InfoMessage message={getTyping(presences, user)} />
      <InputForm
        onBlur={() => channel.setTyping(false)}
        onFocus={() => channel.setTyping(true)}
        onSubmit={channel.sendMessage}
        submit="Send"
      />
    </section>
  )
}

export default ChatRoom
