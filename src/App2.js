import React,{useState,useReducer} from 'react';
import Student from './Student';

const reducer2 =(state,action)=>{
  switch(action.type){
    case 'add-student':
      const newStudent= {
        id:Date.now(),
        name:action.payload.name,
        isHere:false,
      }
      return{
        count:state.count+1,
        students:[...state.students, newStudent],
      };
    case 'delete-student':
      return{
        count: state.count -1,
        students: state.students.filter(
          (student) => student.id !== action.payload.id
        ),
      };
    case 'mark-student':
      return{
        count:state.count,
        students : state.students.map(student=>{
          if(student.id === action.payload.id){
            return{...student, isHere: !student.isHere}
          }
           return student
        })
      }
    default:
      return state;
  }
};


const initialState={
    count:0,
    students:[ ],
};


function App2() {
  const [name,setName] =useState('');
  const [studentsInfo,dispatch]=useReducer(reducer2,initialState)


  return (
    <div>
      <h2>은행에 오신걸 환영합니다</h2>
      <p>총학생수:{studentsInfo.count}명</p>

      <input
        type="text"
        placeholder='이름을 입력하시오'
        value={name}
        onChange={(e)=> setName(e.target.value)}
      />

      <button onClick={()=> {
        dispatch({type:'add-student' , payload:{name} });
        }}>추가</button>
      {studentsInfo.students.map((student)=>{
          return(
            <Student 
              key={student.id} 
              name={student.name} 
              dispatch={dispatch} 
              id={student.id}
              isHere={student.isHere}
            />
        );
      })}
    </div>
  );
}
export default App2;