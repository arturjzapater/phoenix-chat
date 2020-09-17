import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SocketContext } from '../features/Socket/Socket'

const App = () => {
  const messages = useSelector(state => state.messages)
  const dispatch = useDispatch()
  const socket = useContext(SocketContext)

  return (
    <div className="bg-purple-900 text-gray-100">
      Hi!
      <button onClick={() => dispatch({ type: 'ADD_USERNAME', payload: { user: 'Lolo_13' } })}>Click Me!</button>
      <button onClick={() => socket.sendMessage('Hi there!')}>Send Message</button>
      <section>
        {messages.map(x => <article>{x.user}: {x.message}</article>)}
      </section>
    </div>
  )
}

export default App
