import { collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Navigate, parsePath, useNavigate, useParams } from 'react-router-dom'
import { database } from '../firebase';
import { dialogClasses } from '@mui/material';
import { Typography ,Button ,Card ,TextField ,Box} from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { convertLegacyOperators } from '@mui/x-data-grid/internals';
import CircularProgress from '@mui/material/CircularProgress';
// import {FormControlLabel}/

export default function EditUser({props}) {
  const [data , setData] = useState(null);
  const idd = useParams();
  const navigate = useNavigate();
  const[name , setName] = useState(null);
  const[email , setEmail] = useState(null);
  const[gender , setGender] = useState(null);
  const[age , setAge]= useState(null);
  const[city , setCity] = useState(null);
  const[check , setCheck] = useState(false);
  
 const handleEdit = async()=>{
  const docRef = await doc(database, "users", idd.id );
  const docSnap = await getDoc(docRef);
  // setData(docSnap.data())
 if(docSnap){
  console.log(docSnap.data())
  setName(docSnap.data().name)
  setEmail(docSnap.data().email)
  setAge(docSnap.data().age)
  setCity(docSnap.data().city)
  setGender(docSnap.data().gender)
  setCheck(true)
 }
 }
  
 useEffect(()=>{
handleEdit();
 },[])

const handleUpdate = async()=>{
  const temp = {
    name : name,
    email : email,
    gender : gender,
    age : age,
    city : city
  }
  console.log(temp)
  const updatedata = await doc(database , 'users' , idd.id)
  await updateDoc(updatedata , temp)
  navigate('/')
}

  return (
    <div>
   {check  ? <div>
    <div style={{  paddingTop: 150,
      marginBottom: 10,
      display: "flex",
      justifyContent: "center"}}>
         <Typography variant={"h5"} sx={{m :1 , textAlign : 'center'}}>
                Welcome to Website. Enter the details below
                </Typography>
    </div>
     <div style={{display: "flex", justifyContent: "center"}}  >
     <Card varint={"outlined"} style={{width: 400, padding: 20}} onSubmit={()=>{handleUpdate()}}>
    
         <TextField sx={{mb : 2}}
            value={name}
             onChange={(event) => {
                 setName(event.target.value);
             }}
             fullWidth={true}
             variant="outlined"
           
         />
          <TextField sx={{mb : 2}}
               value={email}
              onChange={(event) => {
               setEmail(event.target.value);
           }}
             fullWidth={true}
             variant="outlined"
         />
       <div style={{display : 'flex'}}> 
      <div style={{display : 'flex' , flexDirection : 'row'}}>
      <RadioGroup
         defaultValue={gender}
        row
        
      >
      
        {/* <Typography sx={{mr : 3}}>Gender</Typography> */}
       <FormControlLabel value="female" control={<Radio /> } label="Female"   onChange={(event) => {
                 setGender("female");
             }} />
        <FormControlLabel value="male" control={<Radio />} label="Male"onChange={(event) => {
                 setGender("male");
             }} />
        <FormControlLabel value="other" control={<Radio />} label="Other" onChange={(event) => {
                 setGender("other");
             }} />
</RadioGroup>
      </div>

       <div>
       <TextField sx={{mb : 2}}
            value={age}
             onChange={(event) => {
                 setAge(event.target.value);
             }}
             variant="outlined"
         />
       </div>
       </div>
          <TextField sx={{mb : 2}}
               value={city}
             onChange={(event) => {
                 setCity(event.target.value);
             }}
             fullWidth={true}
             variant="outlined"
         />

<Button  fullWidth={true}  onClick={()=>{handleUpdate()}}
                    size={"large"}
                    variant="contained"
                > Update</Button>
          </Card>
         </div></div> : <div style={{paddingTop: 150,
      marginBottom: 10,
      display: "flex",
      justifyContent: "center"}}>
         <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box></div> }
    </div>
  )
}
