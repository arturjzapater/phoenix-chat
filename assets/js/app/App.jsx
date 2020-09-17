import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import If from '../features/If/If'
import Login from '../features/Login/Login'
import { SocketContext } from '../features/Socket/Socket'

const App = () => {
  const messages = useSelector(state => state.messages)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const socket = useContext(SocketContext)

  return (
    <div className="bg-purple-900 text-gray-100">
      <If cond={!user} then={<Login />} />
      Hi!
      <button onClick={() => socket.sendMessage('Hi there!')}>Send Message</button>
      <section>
        {messages.map(x => <article>{x.user}: {x.message}</article>)}
      </section>
    </div>
  )
}

export default App
