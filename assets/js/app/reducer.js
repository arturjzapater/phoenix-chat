import { Presence } from 'phoenix'

const initState = {
  user: '',
  messages: [],
  presences: {},
}

const actions = {
  ADD_USERNAME: (state, { user }) => ({
    ...state,
    user,
  }),
  PRESENCE_DIFF: (state, { newPresences }) => ({
    ...state,
    presences: Presence.syncDiff(state.presences, newPresences),
  }),
  PRESENCE_STATE: (state, { newPresences }) => ({
    ...state,
    presences: Presence.syncState(state.presences, newPresences),
  }),
  RECEIVE_MESSAGE: (state, { message, type, user }) => ({
    ...state,
    messages: state.messages.concat({ message, type, user }),
  }),
  default: state => ({
    ...state,
  }),
}

export default (state = initState, action) => {
  const handler = actions[action.type] || actions.default
  return handler(state, action.payload)
}
