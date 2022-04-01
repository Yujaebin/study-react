import React,{useState,useRef} from 'react'

/*
    Ref는 하나의 오브젝트이다
    1. useState와는 다르게 Ref안에 있는값을 변화가 일어나도 렌더링 발생 X
    2. 렌더링이 발생안하면서 값 저장을 유지할때 사용 (마운트 해제전까지 값은 유지)
    3. Ref를 통해 Dom 요소 접근
    4. 값은 .current에 저장

*/
function Study_useRef() {
  const [renderer,setRenderer]=useState(0);
  const [count, setCount]=useState(0);
  const countRef=useRef(0);

  console.log(countRef); // countRef.current

  console.log("렌더링발생");

  const increaseCountState=()=>{
    setCount(count+1);
  };

  const increaseCountRef=()=>{
      countRef.current = countRef.current+1
  }
  
  const doRendering=()=>{
      setRenderer(renderer+1);
  }


  return (
    <div>
        <p>State:{count}</p>
        <p>Ref:{countRef.current}</p>
        <button onClick={doRendering}>렌더링</button>
        <button onClick={increaseCountState}>State 상승 </button>
        <button onClick={increaseCountRef}>Ref 올려 </button>
    </div>
  )
}

export default Study_useRef