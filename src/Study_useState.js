import { React, useState } from 'react';

const heavyWork = () =>{
  console.log('엄청무거운 작업!!');
  return ['홍길동','김민수']
}

function Study_useState() {
  const [time, setTime] = useState(1);
  const [names,setNames] =useState(()=>{return heavyWork()});
  //무거운 작업(함수)을 처음에 한번만실행하기 위해서는 인자를 콜백함수로 받아온다 ?heavyWork
  const [input,setInput] =useState('');


  const handleClick = () => {
    let newTime;
    if (time>=12){
      newTime =1;
    }else{
      newTime = time+1;
    }
    setTime(newTime);
  };

  
  const handleInputChange = (e)=>{
    setInput(e.target.value);
  }
  // input을 담아두는 함수

  const hadleUpload = ()=>{
    setNames( (prevState)=>{
      console.log(prevState)
      return([input, ...prevState])
    } ) 
  }
  // 새로운 배열을 만들면서 이전의 배열을 유지 하기 위해 콜백 함수를 사용한다.
  

  return (
    <div>
      <span>현재시각:{time}시 </span>
      <button onClick={handleClick}> Update </button>
      <br></br>

      <input type="text" value={input} onChange={handleInputChange}></input>
      <button onClick={hadleUpload}>Upload</button>
      {names.map((name ,idx)=>{
        return <p key={idx}>{name}</p>
      })}
    </div>
  );
}

export default Study_useState;
