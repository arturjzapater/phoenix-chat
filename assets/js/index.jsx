import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './app/App'
import SocketProvider from './features/Socket/Socket'
import store from './app/store'
import '../css/app.css'

ReactDOM.render(
  <Provider store={store}>
    <SocketProvider>
      <App />
    </SocketProvider>
  </Provider>,
  document.getElementById('root')
)
