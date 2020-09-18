import React from 'react'

const UserDescription = ({ user }) => (
  <span className="italic text-sm">
    <span className="font-semibold">{user}&nbsp;</span>
    <span>said:</span>
  </span>
)

export default UserDescription
