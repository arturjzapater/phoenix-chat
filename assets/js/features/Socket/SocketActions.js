const receiveMessage = (message, user) => ({
  type: 'RECEIVE_MESSAGE',
  payload: {
    message,
    user,
  },
})

export { receiveMessage }
