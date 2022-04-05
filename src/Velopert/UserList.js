import React,{useEffect} from 'react'

function UserList({list,onDelete,onModify}) {
  useEffect(()=>{
    console.log("컴포넌트가 화면에 출력");
    return()=>{
      console.log("컴포넌트가 화면에 사라짐");
    }
  },[]);
  /* 마운트 시에 하는 작업들 예시)
     1. props 로 받은 값을 컴포넌트의 로컬 상태로 설정
     2. 외부 API 요청 (REST API 등)
     3. 라이브러리 사용 (D3, Video.js 등...)
     4. setInterval 을 통한 반복작업 혹은 setTimeout 을 통한 작업 예약
     
     언마운트시에 하는 작업들 예시)
     1. setInterval, setTimeout 을 사용하여 등록한 작업들 clear 하기 (clearInterval, clearTimeout)
     2. 라이브러리 인스턴스 제거
  */
  return (
    <div>
        <span

          onClick={()=>onModify(list.id)} 
          style={{
          cursor: 'pointer',
          color: list.state ? 'green' : 'black'

        }}>{list.userName}</span>:<span>{list.userEmail}</span>
        <button onClick={()=>onDelete(list.id)}>삭제하기</button>
    </div>
  )
}

export default React.memo(UserList);