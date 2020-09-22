import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SocketContext } from './Socket'
import { receiveMessage, systemMessage, updateUserList } from './SocketActions'

const useChannel = channelName => {
  const [ channel, setChannel ] = useState()
  const user = useSelector(state => state.user)
  const { socket } = useContext(SocketContext)
  const dispatch = useDispatch()

  useEffect(() => {
    const phoenixChannel = socket.channel(channelName, { params: { user } })

    phoenixChannel.join()
      .receive('ok', res => {
        setChannel(phoenixChannel)
        console.log('Joined successfully!', res)
      })
      .receive('error', res => console.log('Oopsies!', res))

    phoenixChannel.on('new_message', ({ message, user }) => dispatch(receiveMessage(message, user)))
    phoenixChannel.on('user_joined', ({ user, user_list }) => {
      console.log(user_list)
      dispatch(updateUserList(user_list))
      dispatch(systemMessage(`${user} joined the conversation`))
    })
    phoenixChannel.on('user_left', ({ user, user_list }) => {
      console.log(user_list)
      dispatch(updateUserList(user_list))
      dispatch(systemMessage(`${user} left the conversation`))
    })

    return () => phoenixChannel.leave()
  }, [])

  return {
    channel,
    sendMessage: message => channel.push('new_message', { message }),
  }
}

export default useChannel
