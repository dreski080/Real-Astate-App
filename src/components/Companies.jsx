import { Container, styled, Box, Typography } from '@mui/material'
import React from 'react'

// image
import K1 from '../assets/logo.png'

function Companies() {
  const CustomContainer = styled(Container)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')] : {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: theme.spacing(4)
    }
  }))

  const CustomBox = styled(Box)(({theme}) => ({
    [theme.breakpoints.down('md')] : {
      marginBottom: theme.spacing(4)
    }
  }))

  return (
    <CustomContainer>
      <CustomBox>
        <img src={K1} alt='logo' style={{maxWidth: '100%'}} />
        <Typography variant='body2' sx={{color: '#7d8589', fontSize: '16px', fontWeight: 'bold', mt: 2}}>
          More than 45,000 trust Besnik
        </Typography>
      </CustomBox>
    </CustomContainer>
  )
}

export default Companies