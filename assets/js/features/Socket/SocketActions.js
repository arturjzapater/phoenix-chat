const receiveMessage = (message, user) => ({
  type: 'RECEIVE_MESSAGE',
  payload: {
    message,
    type: 'user-message',
    user,
  },
})

const systemMessage = message => ({
  type: 'RECEIVE_MESSAGE',
  payload: {
    message,
    type: 'system',
    user: 'system',
  },
})

export { receiveMessage, systemMessage }
