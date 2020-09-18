import React from 'react'
import If from '../If/If'
import UserDescription from './UserDescription'

const Message = ({ message, type, user }) => (
  <div className="font-sans my-2 flex flex-col">
    <If
      cond={type === 'user-message'}
      then={<UserDescription user={user} />}
    />
    <p className={`leading-relaxed ${type === 'system' ? 'italic text-sm' : 'pl-4'}`}>{message}</p>
  </div>
)

export default Message
