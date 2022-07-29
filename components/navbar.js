import { Typography, Stack} from "@mui/material"
import { HiMenu } from 'react-icons/hi'

const Navbar = () => {
  return (
  <Stack direction='row' spacing ={14} size = '90px'>
  <img alt = 'icon' />
  <Typography> CraveAway</Typography>
  <a href="/api/auth/login">Login</a>
  {/* <a href="/api/auth/logout">Logout</a> */}
  <HiMenu onClick ={()=>console.log('Hello')}/>
  </Stack>
  )
}

export default Navbar