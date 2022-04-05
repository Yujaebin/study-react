import React,{useState,useRef} from 'react'
import CreateUser from './CreateUser'
import UserList from './UserList'

function App3() {
    const idCount=useRef(1);
    const [inputs,SetInputs]=useState({
        userName:'',
        userEmail:'',
    });
    const {userName,userEmail}=inputs;

    const onChange=(e)=>{
        const{name,value} =e.target;
        SetInputs({
          ...inputs,
          [name]:value
        })
    };
  
    const [userList,SetUserList]=useState([]);

    const onCreate=()=>{
        const newUser={
            id:idCount.current,
            userName:userName, //inputs.userName
            userEmail:userEmail, //inputs.userName
            state:false,
        };
        SetUserList([
            ...userList,newUser
        ]);
        SetInputs({
            userName:'',
            userEmail:'',
        })
        idCount.current+=1;

        console.log(userList);
    };
    return (
        <div>
            <CreateUser userName={userName} userEmail={userEmail} onChange={onChange} onCreate={onCreate}  />
            {userList.map((list)=>{
                return(
                <UserList key={list.id} list={list} />
                );
            })}
        </div>
    )
}

export default App3