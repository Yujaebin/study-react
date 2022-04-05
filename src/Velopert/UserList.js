import React from 'react'

function UserList({list}) {
  return (
    <div>
        <span>{list.userName}</span>
        <span>{list.userEmail}</span>
    </div>
  )
}

export default UserList