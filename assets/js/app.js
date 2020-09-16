// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import "../css/app.scss"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import deps with the dep name or local files with a relative path, for example:
//
//     import {Socket} from "phoenix"
//     import socket from "./socket"
//
import "phoenix_html"
import { Socket } from 'phoenix'

const socket = new Socket('/socket', { params: { user: `johnny_${Math.floor(Math.random() * 150)}` } })
socket.connect()

const channel = socket.channel('room:12')
channel.join()
    .receive('ok', res => console.log('Joined successfully!', res))
    .receive('error', res => console.log('Oopsies!', res))

channel.on('new_message', res => console.log(res))
channel.on('user_joined', res => console.log(res.message, res.user))

channel.push('new_message', { message: 'Hi there!' })