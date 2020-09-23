import { Presence } from 'phoenix'
import React from 'react'
import { useSelector } from 'react-redux'
import UserItem from './UserItem'

const makeUserItems = presences =>
  Presence.list(
    presences,
    (user, { metas: [{ typing, phx_ref }] }) =>
      <UserItem name={user} typing={typing} key={phx_ref} />
  )

const UserList = () => {
  const presences = useSelector(state => state.presences)

  return (
    <section className="ml-8 my-8 md:w-1/6 md:overflow-y-auto md:h-v-80">
      <h2 className="font-semibold mb-2">
        Participants
      </h2>
      <ul className="flex flex-wrap md:flex-col md:flex-no-wrap list-none">
        {makeUserItems(presences)}
      </ul>
    </section>
  )
}

export default UserList
