const initState = {
  user: '',
  messages: [],
}

const actions = {
  ADD_USERNAME: (state, { user }) => ({
    ...state,
    user,
  }),
  RECEIVE_MESSAGE: (state, { message, user }) => ({
    ...state,
    messages: state.messages.concat({ message, user }),
  }),
  default: state => ({
    ...state,
  }),
}

export default (state = initState, action) => {
  const handler = actions[action.type] || actions.default
  return handler(state, action.payload)
}
