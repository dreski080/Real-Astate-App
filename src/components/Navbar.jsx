import { Box, Container, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, styled } from '@mui/material'
import React, { useState } from 'react'

// icons
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ContactsIcon from '@mui/icons-material/Contacts';

// image
import K1 from '../assets/logo.png'
import CustomButton from './CustomButton';

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState({
    left: false
  })

  const tonggleDrawer = (anchor,open) => (event) => {
    if(event.type === 'keydown' && (event.type === 'Tab' || event.type === "Shift")) {
      return
    }

    setMobileMenu({...mobileMenu, [anchor]: open})
  }

  const list = (anchor) => (
    <Box sx={{width: anchor=== 'top' || anchor === 'bottom' ? 'auto' : 250}}
    role='presentation'
    onClick={tonggleDrawer(anchor, false)}
    onKeyDown={tonggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Feature", "Services", "Listed", "Contact"].map(
          (text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 && <HomeIcon/>}
                  {index === 1 && <FeaturedPlayListIcon/>}
                  {index === 2 && <MiscellaneousServicesIcon/>}
                  {index === 3 && <ListAltIcon/>}
                  {index === 4 && <ContactsIcon/>}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  )

  const NavLink = styled(Typography)(({theme}) => ({
    fontSize: '14px',
    color: '#4f5361',
    fontWeight: 'bold',
    cursor: 'pointer',
    "&:hover" : {
      color: '#fff'
    }

  }))

  const NavbarLinksBox = styled(Box)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(3),
    [theme.breakpoints.down('md')] : {
      display: 'none'
    }
  }))

  const CustomMenuIcon = styled(MenuIcon)(({theme}) => ({
    cursor: 'pointer',
    display: 'none',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('md')] : {
      display: 'block'
    }
  }))

  const NavbarContainer = styled(Container)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(5),
    [theme.breakpoints.down('md')] : {
      padding: theme.spacing(2)
    }
  }))

  const NavbarLogo = styled('img')(({theme}) => ({
    cursor: 'pointer',
    [theme.breakpoints.down('md')] : {
      display: 'none'
    }
  }))

  return (
    <NavbarContainer>
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2.5rem'}}>
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <CustomMenuIcon onClick={tonggleDrawer('left', true)} />
          <Drawer anchor='left' open={mobileMenu['left']} onClose={tonggleDrawer('left', false)}>
            {list("left")}
          </Drawer>
          <NavbarLogo src={K1} alt='logo' />
        </Box>

        <NavbarLinksBox>
          <NavLink variant='body2'>Home</NavLink>
          <NavLink variant='body2'>Features</NavLink>
          <NavLink variant='body2'>Services</NavLink>
          <NavLink variant='body2'>Listed</NavLink>
          <NavLink variant='body2'>Contact</NavLink>
        </NavbarLinksBox>
      </Box>

      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem'}}>
          <NavLink variant='body2'>Sign Up</NavLink>
          <CustomButton backgroundColor='#0f1b4c' color='#fff' buttonText='Register' />
        </Box>
    </NavbarContainer>
  )
}

export default Navbar