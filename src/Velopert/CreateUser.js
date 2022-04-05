import React from 'react'

function CreateUser({userName, userEmail, onChange, onCreate}) {
  return (
    <div>
        <input name='userName' placeholder='이름입력' value={userName} onChange={onChange}></input>

        <input name='userEmail' placeholder='이메일 입력' value={userEmail}onChange={onChange}></input>

        <button onClick={onCreate}>Create</button>
        <br/>
        {userName}:{userEmail}
    </div>
  )
}

export default CreateUser