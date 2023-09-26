import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import Button from '@mui/material/Button';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,TableFooter, TablePagination,Paper } from '@mui/material';
import { deleteDoc, doc, getDoc } from 'firebase/firestore';
import { database } from '../firebase';
import { useNavigate } from 'react-router-dom';
import EditUser from '../Pages/EditUser';
import Modal from '@mui/material/Modal';
import { Box , Typography } from '@mui/material';
import ViewUser from './ViewUser';
import CircularProgress from '@mui/material/CircularProgress';


export default function Tabless({props}) {
const navigate = useNavigate();
    const[info , setInfo] = useState(null);
    const [open, setOpen] = React.useState(false);
    const handleOpen = (data) => {
setInfo(data)
      setOpen(true)
    }
    const handleClose = () => setOpen(false); 

 const rows = (props ? props : [])

//  console.log(rows)
const handleDelete = async(id)=>{
  const deleteval =await doc(database , "users" , id);
  await deleteDoc(deleteval);
  window.location.reload()
}

const handleEdit = async(id)=>{
    navigate('/edit/'+ id)
}
  return (
    <div style={{border : '1px solid'}}>

    <Paper>
      <TableContainer >
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        {rows.length === 0 ? <div style={{paddingTop: 150,
      marginBottom: 10,
      display: "flex",
      justifyContent: "center"}}>
        <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
      </div> : <></>}
        <TableBody> 
        
          {rows.map((row) => {
          return(
            <TableRow key={row.id}>
            <TableCell>{row.index}</TableCell>
            <TableCell sx={{width : '130px'}}>{row.name}</TableCell>
            <TableCell sx={{width : '130px'}}>{row.email}</TableCell>
            <TableCell sx={{width : '130px'}}>{row.age}</TableCell>
            <TableCell sx={{width : '130px'}}>{row.gender}</TableCell>
            <TableCell sx={{width : '130px'}}>{row.city}</TableCell>
            <TableCell>
            <Button variant="contained" sx={{m :1}} onClick={()=>{
              handleOpen(row)
            }} >View</Button>
      
        <Modal   open={open}
        onClose={handleClose}>
         <ViewUser props = {info} />
      </Modal>
           
            <Button variant="contained" sx={{m :1}} onClick={()=>{handleEdit(row.id)}}>Edit</Button>
            <Button variant="contained" sx={{m :1}} onClick={()=>{handleDelete(row.id)}}>Delete</Button>
            </TableCell>
          </TableRow>
          )
          })}
         </TableBody>
        <TableFooter>
        </TableFooter>
        </Table>
     
      </TableContainer>
    
      </Paper>
    </div>
  )
}
