import { Box, Container, Typography, styled } from '@mui/material'
import React from 'react'

// components
import Navbar from './Navbar'
import CustomButton from './CustomButton'

// image
import K1 from '../assets/hero_illustration.png'

function Hero() {
  const CustomBox = styled(Box)(({theme}) => ({
    display: "flex",
    justifyContent: 'center',
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")] : {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }
  }))

  const Title = styled(Typography)(({theme}) => ({
    fontSize: '64px',
    color: "#000336",
    fontWeight: 'bold',
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down('sm')] : {
      fontSize: '40px'
    }
  }))
  return (
    <Box sx={{backgroundColor: '#E6F0FF', minHeight: '80vh'}}>
      <Container>
        <Navbar/>
        <CustomBox>
          <Box sx={{flex: '1'}}>
            <Typography variant='body2' sx={{fontSize: '18px', color: '#687696', fontWeight: '500', mt: 10, mb: 4}}>
              Welcome to Besnik Agency
            </Typography>
            <Title variant='h1'>
            Discover a place where you'll love to live.
            </Title>
            <Typography variant='body2' sx={{fontSize: '18px', color: '#5A6473', my: 4}} >
            Be the first to get the best real estate deals before they hit the mass market! Hot foreclosure deals with one simple search!
            </Typography>
            <CustomButton backgroundColor='#0f1b4c' color='#fff' buttonText='More About Us' heroBtn={true} />
          </Box>

          <Box sx={{flex: '1.25'}}>
            <img src={K1} alt='heroImg' style={{maxWidth: '100%', marginBottom: '2rem'}} />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  )
}

export default Hero