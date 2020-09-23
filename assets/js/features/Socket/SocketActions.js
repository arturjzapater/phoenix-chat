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

const presenceState = newPresences => ({
  type: 'PRESENCE_STATE',
  payload: {
    newPresences,
  },
})

const presenceDiff = newPresences => ({
  type: 'PRESENCE_DIFF',
  payload: {
    newPresences,
  },
})

export { presenceDiff, presenceState, receiveMessage, systemMessage }
