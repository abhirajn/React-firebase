import  React , {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
// import TextField from "@mui/material/TextField";
import {Card, Typography} from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import  {database} from '../firebase'
import { addDoc , collection } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';

export default function AddUser() {
const[name , setName] = useState(null);
const[email , setEmail] = useState(null);
const[gender , setGender] = useState(null);
const[age , setAge]= useState(null);
const[city , setCity] = useState(null);
const navigate = useNavigate();
const value = collection(database , "users");
const errorMessage = () => {
  toast.error('Fill all the columns', {
      position: toast.POSITION.TOP_CENTER
  });
};

const SuccessMessage = () => {
  toast.success('User added', {
      position: toast.POSITION.TOP_CENTER
  });
};

const handleSubmit = async() =>{
  if(!name || !email || !gender || !age || !city){
    errorMessage();
  
   }else{
   const temp = {
      name : name,
      email : email,
      gender : gender,
      age : age,
      city : city
   }
  
    await addDoc(value , temp);
    SuccessMessage();
    navigate('/');
   }

}
  return (
    <div>
    <div style={{  paddingTop: 150,
      marginBottom: 10,
      display: "flex",
      justifyContent: "center"}}>
         <Typography variant={"h5"} sx={{m :1 , textAlign : 'center'}}>
                Welcome to Website. Enter the details below
                </Typography>
    </div>
     <div style={{display: "flex", justifyContent: "center"}}>
     <Card varint={"outlined"} style={{width: 400, padding: 20}}>
         <TextField sx={{mb : 2}}
             onChange={(event) => {
                 setName(event.target.value);
             }}
             fullWidth={true}
             label="Name"
             variant="outlined"
             required
         />
           <ToastContainer/>
          <TextField sx={{mb : 2}}
              onChange={(event) => {
               setEmail(event.target.value);
           }}
             fullWidth={true}
             label="Email"
             variant="outlined"
         />
       <div style={{display : 'flex'}}> 
      <div style={{display : 'flex' , flexDirection : 'row'}}>
      <RadioGroup
        row
      >
        {/* <Typography sx={{mr : 3}}>Gender</Typography> */}
       <FormControlLabel value="female" control={<Radio /> } label="Female"  onChange={(event) => {
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
             onChange={(event) => {
                 setAge(event.target.value);
             }}
            //  fullWidth={true}
             label="Age"
             variant="outlined"
         />
       </div>
       </div>
          <TextField sx={{mb : 2}}
             onChange={(event) => {
                 setCity(event.target.value);
             }}
             fullWidth={true}
             label="City"
             variant="outlined"
         />

<Button  fullWidth={true} onClick={handleSubmit}
                    size={"large"}
                    variant="contained"
                > Add</Button>
          </Card>
         </div>
         </div>
  )
}
