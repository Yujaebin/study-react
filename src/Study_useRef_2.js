import React,{useEffect, useRef} from 'react'

//useRef를 통해 Dom요소에 접근하는 예시

function Study_useRef_2() {
    const inputRef=useRef();

    useEffect(()=>{
        inputRef.current.focus();
    },[])

    const login=()=>{
        alert(`환영합니다 ${inputRef.current.value}`);
        console.log(inputRef);
    }

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="username">
            </input>
            <button onClick={login}>로그인</button>
        </div>
    )
}

export default Study_useRef_2