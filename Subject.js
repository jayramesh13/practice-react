import React, { useState } from "react";
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './App.css';
const Subject = ()=>{
    
    const [rowData,setRowdata] = useState([])

const addTablerows = ()=>{
let rowInput = { 
          subjectname : "",
          subjectid : null ,
          subjectgrade:""
}
setRowdata([...rowData,rowInput])
    }

const deleteRow = (index) => {
  const rows = [...rowData];
  rows.splice(index, 1);
  setRowdata(rows);
 }
 
// const deleteRow = (index,event) => {
//     const rows = [...rowData];
//     var indextobe = rows.findIndex(x => x.index===index);
//   setRowdata(rows.filter((item,i)=>i!==indextobe));
//  }
const handleChange =(index,event)=>{
 let {name,value} =event.target;
 const rowInput =[...rowData];
 rowInput[index][name] = value ;
 setRowdata(rowInput)
}
 

    return (
        <div id="sub">
            <Button variant="contained" onClick={addTablerows}>ADD</Button>
            <Button variant="contained">DELETE</Button>
            <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
        <TableRow>

            <TableCell align="right">SUBJECT NAME&nbsp;</TableCell>
            <TableCell align="right">SUBJECT ID&nbsp;</TableCell>
            <TableCell align="right">SUBJECT GRADE&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {rowData.map((data,index)=>{
          return(
              <>
              <TableRow key={index}>
              <TableCell align="right">
                  <input type ="text" value={rowData.subjectname}
                  onChange ={(event)=>{handleChange(index,event)}}
                  name = "subjectname"
                  />
              </TableCell>
              <TableCell align="right">
                  <input type ="text" value={rowData.subjectid}
                  onChange ={(event)=>{handleChange(index,event)}}
                  name = "subjectid"
                  />
              </TableCell>
              <TableCell align="right">
                  <input type ="text" value={rowData.subjectgrade}
                  onChange ={(event)=>{handleChange(index,event)}}
                  name = "subjectgrade"
                  />
              </TableCell>
              <TableCell align="right">
                 <Button variant="contained"  onClick={(event)=>(deleteRow(index,event))}>
                  Delete
                 </Button>
 
              </TableCell>
              </TableRow>
              
              </>
          )




        })
        }
        </TableBody>
      </Table>
    </TableContainer>
        
        </div>
    )
}
export default Subject
