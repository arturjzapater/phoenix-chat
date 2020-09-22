import React from 'react'
import { useSelector } from 'react-redux'
import UserItem from './UserItem'

const UserList = () => {
  const list = useSelector(state => state.userList)

  return (
    <section className="ml-8 my-8 min-w-1/6">
      <h2 className="font-semibold mb-4">
        Participants
      </h2>
      <ul className="flex flex-wrap md:flex-col md:flex-no-wrap list-none">
        {list.map(x => <UserItem name={x} key={name + Math.random().toFixed(5)} />)}
      </ul>
    </section>
  )
}

export default UserList
