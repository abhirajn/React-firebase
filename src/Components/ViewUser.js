import React from 'react'
import { Box , Typography } from '@mui/material';

export default function ViewUser({props}) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

  return (
    <div>
             <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            User Info : 
          </Typography>
          <Typography sx={{ mt: 2 }}> Name :  
{" " + props.name}
          </Typography>
          <Typography sx={{ mt: 2 }}> Email :
{" " +props.email}
          </Typography>
          <Typography sx={{ mt: 2 }}> Gender :
{" " +props.gender}
          </Typography>
          <Typography sx={{ mt: 2 }}>Age :
{ " " +props.age}
          </Typography>
          <Typography sx={{ mt: 2 }}> City : 
{" " +props.city}
          </Typography>
        </Box>
    </div>
  )
}
