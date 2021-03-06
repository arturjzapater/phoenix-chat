import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SocketContext } from './Socket'
import {
  presenceDiff,
  presenceState,
  receiveMessage,
  systemMessage
} from './SocketActions'

const useChannel = channelName => {
  const [ channel, setChannel ] = useState()
  const { socket } = useContext(SocketContext)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    const phoenixChannel = socket.channel(channelName, { params: { user } })

    phoenixChannel.join()
      .receive('ok', res => {
        setChannel(phoenixChannel)
        console.log('Joined successfully!', res)
      })
      .receive('error', res => console.log('Oopsies!', res))

    phoenixChannel.on('new_message', ({ message, user }) => {
      dispatch(receiveMessage(message, user))
    })

    phoenixChannel.on('user_joined', ({ user }) => {
      dispatch(systemMessage(`${user} joined the conversation`))
    })

    phoenixChannel.on('user_left', ({ user }) => {
      dispatch(systemMessage(`${user} left the conversation`))
    })

    phoenixChannel.on('presence_state', state => {
      dispatch(presenceState(state))
    })

    phoenixChannel.on('presence_diff', diff => {
      dispatch(presenceDiff(diff))
    })

    return () => phoenixChannel.leave()
  }, [])

  return {
    channel,
    sendMessage: message => channel.push('new_message', { message }),
    setTyping: typing => channel.push('user_typing', { typing }),
  }
}

export default useChannel
