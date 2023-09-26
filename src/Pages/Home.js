import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
// import Table from '../Components/Table'
import  {database} from '../firebase'
import { addDoc , collection, getDoc, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Tables from '../Components/Table';

export default function Home() {
  const navigate = useNavigate();
const value = collection(database , "users");
const [ata , setAta] = useState(null);

const init = async()=>{
   const response = await getDocs(value)
  //  console.log(response)
  setAta(response.docs.map((doc , index)=>({...doc.data(), id : doc.id , index : index+1 })))
}

useEffect(() => {
  init();
}, []);

  return (
    
    <div>
       <div style={{marginTop : '5%' , marginLeft : '10%' , marginRight : '10%'}}> <Tables props = {ata} /></div>
    </div>
  )
}

