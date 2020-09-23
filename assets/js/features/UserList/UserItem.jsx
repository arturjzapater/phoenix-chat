import React from 'react'

const UserItem = ({ name, typing }) => (
  <li className="mx-4 my-1 break-words leading-tight">
    {name}
    {typing ? ' (...)' : ''}
  </li>
)

export default UserItem
