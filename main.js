import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Subject from './Subject'
import './App.css';

function Main() {

  let studentdetails = [{
    rollNo: "1",
    stuName: "",
    age: null
  },
  {
    rollNo: "2",
    stuName: "",
    age: null
  }
  ]
  let [students, setstudents] = useState(studentdetails)
  let [inputroll, setinputroll] = useState("")

  // let updateData = (index,name,event)=>{
  //   const student= students.filter((student,i)=>{

  //   return i===index
  //  })
  //  const studentsArr = students.filter((student,i)=>{

  //   return i!==index
  //  })
  //  let  [stu]=student
  //  setstudents([...studentsArr,{...stu,[name]:event.target.value}])
  // }
  //   let updateData= (index,name,event) => (event) => {
  //     let newArr =students.map((item, i) => {
  //       if (index === i) {
  //         return { ...item, [name]: event.target.value };
  //       } 
  //       // else {
  //       //   return item;
  //       // }
  //     });
  //     setstudents([...students,newArr]);
  //   };
  // console.log(students)

  return (
    <div>
    <div id="list">
      ENTER ROLL NO: <TextField id="outlined-basic" value={inputroll} onChange={(e) => { setinputroll(e.target.value) }} variant="outlined" />
      {students.map((student, index) => {

        return (
          <>
            <div>
              <h2> ROLL NO</h2>
              <TextField
                id="outlined-basic"
                value={student.rollNo}
                variant="outlined"
              />
            </div>
            <div key={index}>
              <h2 > STUDENT NAME</h2>
              <TextField
                id="outlined-basic"
                onChange={(e) => {
                  // updateData(index,e)
                  student.stuName = e.target.value
                  setstudents([...students])
                }}
                className={(student.rollNo === inputroll && student.stuName === "" && "inputbox-notfilled") || (student.rollNo === inputroll && student.stuName !== "" && "inputbox-filled")}
                variant="outlined"
              />
            </div>
            <div key={index}>
              <h2> AGE</h2>
              <TextField
                id="outlined-basic"
                onChange={(e) => {
                  // updateData(index,"age",e)
                  student.age = e.target.value
                  setstudents([...students])

                }}
                className={(student.rollNo === inputroll && student.age === null && "inputbox-notfilled") || (student.rollNo === inputroll && student.age !== null && "inputbox-filled")}
                variant="outlined"
              />
            </div>
          </>
        );
      })}
      </div>
<Subject/>

    </div>
  )


}




export default Main


