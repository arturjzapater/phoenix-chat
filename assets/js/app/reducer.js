const initState = {
  user: '',
  messages: [],
  userList: [],
}

const actions = {
  ADD_USERNAME: (state, { user }) => ({
    ...state,
    user,
  }),
  RECEIVE_MESSAGE: (state, { message, type, user }) => ({
    ...state,
    messages: state.messages.concat({ message, type, user }),
  }),
  UPDATE_USER_LIST: (state, { list }) => ({
    ...state,
    userList: list,
  }),
  default: state => ({
    ...state,
  }),
}

export default (state = initState, action) => {
  const handler = actions[action.type] || actions.default
  return handler(state, action.payload)
}
