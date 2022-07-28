import { Typography, Stack} from "@mui/material"
import {HiMenu }from 'react-icons/hi'

const Navbar = () => {
  return (
  <Stack direction='row' spacing ={14} size = '90px'>
  <img alt = 'icon' />
  <Typography> CraveAway</Typography>
  <HiMenu onClick ={()=>console.log('Hello')}/>
  </Stack>
  )
}

export default Navbar