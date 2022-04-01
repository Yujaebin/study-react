import React,{useState,useEffect} from 'react'
import Timer from './Timer'
/*

useEffcet(()=>{
    실행할 함수
},[value])

1. 렌더링이 실행될때마다 특정 명령어를 실행한다
2. value을 넣어두면 value값이 변할때마다 실행
3. value를 비워두면 첫렌더링 때만 실행(이후엔 실행 x)
*/
function Study_userEffect() {
  const[showTimer,setShowTimer]=useState(false);
  return (
    <div>
      {showTimer && <Timer/>}
      <button onClick={()=>{setShowTimer(!showTimer)}}>Toggle Timer</button>
    </div>
  )
}

export default Study_userEffect