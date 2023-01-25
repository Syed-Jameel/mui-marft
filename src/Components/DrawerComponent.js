import React, {useState} from 'react'
import { Drawer, IconButton, List, ListItemButton,ListItemIcon,ListItemText, Menu,MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from 'react-router-dom';
const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  // const PAGES = ["About us", "Service", "Blog", "Contact", "Login", "Logout"];

  return (
     <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} >
      <IconButton onClick= {() => setOpenDrawer(!openDrawer)} sx={{marginLeft:"auto"}} size="large">
        <CloseIcon></CloseIcon>
      </IconButton>
        <List sx={{padding:"20px"}}>
              <ListItemButton component={Link} to="/about-us" variant="contained" onClick= {() => setOpenDrawer(!openDrawer)}>
                <ListItemIcon ><PersonIcon/></ListItemIcon>
                <ListItemText >About us</ListItemText>
              </ListItemButton>
              <ListItemButton component={Link} to="/service" variant="contained" onClick= {() => setOpenDrawer(!openDrawer)}>
                <ListItemIcon ><SupportAgentIcon/></ListItemIcon>
                <ListItemText >Service</ListItemText>
              </ListItemButton>
              <ListItemButton component={Link} to="/blog" variant="contained" onClick= {() => setOpenDrawer(!openDrawer)}>
                <ListItemIcon ><VideoLabelIcon/></ListItemIcon>
                <ListItemText >Blog</ListItemText>
              </ListItemButton>
              <ListItemButton component={Link} to="/" variant="contained" onClick= {() => setOpenDrawer(!openDrawer)}>
                <ListItemIcon ><LoginIcon/></ListItemIcon>
                <ListItemText >Login</ListItemText>
              </ListItemButton>
              <ListItemButton component={Link} to="/" variant="contained" onClick= {() => setOpenDrawer(!openDrawer)}>
                <ListItemIcon ><LogoutIcon/></ListItemIcon>
                <ListItemText >Logout</ListItemText>
            </ListItemButton>
        </List>
      </Drawer>
      <IconButton onClick= {() => setOpenDrawer(!openDrawer)}>
        <MenuIcon></MenuIcon>
      </IconButton>
     </>
  )
}

export default DrawerComponent
