import React,{useState,useRef,useMemo,useCallback} from 'react'
import CreateUser from './CreateUser'
import UserList from './UserList'

function countActiveUsers(userList){
    console.log("state 를 카운팅 중입니다...");
    return userList.filter(user=>user.state).length;
}

function App3() {
    const idCount=useRef(1);
    const [inputs,setInputs]=useState({
        userName:'',
        userEmail:'',
    });
    const {userName,userEmail}=inputs;

    const onChange=(e)=>{
        const{name,value} =e.target;
        setInputs({
          ...inputs,
          [name]:value
        })
    };
  
    const [userList,setUserList]=useState([]);

    const onCreate= useCallback(()=>{
        const newUser={
            id:idCount.current,
            userName:userName, //inputs.userName
            userEmail:userEmail, //inputs.userName
            state:false,
        };
        setUserList([
            ...userList,newUser
        ]);
        setInputs({
            userName:'',
            userEmail:'',
        })
        idCount.current+=1;

        console.log(userList);
    },[userList,userName,userEmail]);

    const onDelete= useCallback((id)=>{
        setUserList(userList.filter((user)=>(user.id !== id)));
    },[userList]);

    const onModify=useCallback((id)=>{
        setUserList(userList.map((user)=> user.id === id ? { ...user, state: !user.state } : user));
    },[userList]);
    const count=useMemo(()=>countActiveUsers(userList),[userList]); //useMemo를 통해 특정 함수의 불필요한 렌더링 방지, []안에 값이 변해야지 함수가 실행
    return (
        <div>
            <CreateUser userName={userName} userEmail={userEmail} onChange={onChange} onCreate={onCreate}  />
            {userList.map((list)=>{
                return(
                <UserList key={list.id} list={list} onDelete={onDelete} onModify={onModify} />
                );
            })}
            <br/>
            활성사용자 수:{count}
        </div>
    )
}

export default App3