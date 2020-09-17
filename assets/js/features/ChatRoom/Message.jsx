import React from 'react'
import If from '../If/If'

const Message = ({ message, type, user }) => (
  <p>
    <If
      cond={type === 'user-message'}
      then={<span className="font-semibold">{user}:&nbsp;</span>}
    />
    <span className={type === 'system' ? 'italic' : ''}>{message}</span>
  </p>
)

export default Message
