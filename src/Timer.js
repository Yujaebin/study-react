import React,{useEffect}from 'react'

const Timer=()=>{

    useEffect(()=>{
        const timer =setInterval(()=>{
            console.log('타타이머 돌아가는중...')
        },1000)

        return()=>{
            clearInterval(timer);
            console.log("타이머 종료");
            /*
            return의 발동 조건! (clean up)git
            1. dependancy(두번째 인자로 넘기는 배열)가 바뀌어서 effect가 달라져야할 때 (이전 effect 청소)
            2. 해당 component가 unmount 될 때
            */
        }
    },[]);
    return(
        <div>
            <span>타이머를 시작합니다. 콘솔을 보세요!</span>
        </div>
    )
}

export default Timer