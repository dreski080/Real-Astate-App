import { Box, Typography, styled } from '@mui/material'
import React from 'react'

// components
import CustomButton from './CustomButton'

// image
import K1 from '../assets/buy_icon.png'
import K2 from '../assets/sell_icon.png'
import K3 from '../assets/rent_icon.png'

// icon
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Guide() {
  const CustomBox = styled(Box)(({theme}) => ({
    width: '30%',
    [theme.breakpoints.down('md')] : {
      width: '85%'
    }
  }))

  const GuidesBox = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-around',
    width: '70%',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('md')] : {
      width: '100%'
    },
    [theme.breakpoints.down('sm')] : {
      marginBottom: '0',
     flexDirection: 'column'
    }
  }))

  const GuideBox = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(5),
    [theme.breakpoints.down('sm')] : {
      margin: theme.spacing(2, 0, 2, 0)
     }
  }))

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{ width: '5%', height: '5px', backgroundColor: '#000339', margin: '0 auto'}}>

      </div>
      <Typography variant='h3'sx={{fontSize: '35px', fontWeight: 'bold', color: '#000339', my: 3}} >
        How is wokrs?
      </Typography>

      <CustomBox>
        <Typography variant='body2' sx={{fontSize: '16px', fontWeight: '500', color: '#5a6473', textAlign: 'center'}}>
          Everything you need to know when you want to buy, rent or sell - All i one place
        </Typography>
      </CustomBox>

      <GuidesBox>
        <GuideBox>
          <img src={K1} alt='buyIcon' />
          <Typography variant='body2' sx={{fontWeight: '500', fontSize: '20px', color: '#383c45', my: 1}}>
            Buying Guides
          </Typography>
          <Box sx={{cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Typography variant='body2' sx={{fontWeight: 'bold', fontSize: '14px', color: '#0689ff'}}>
              How to buy
            </Typography>
            <ArrowRightAltIcon style={{color: '#0689ff'}} />
          </Box>
        </GuideBox>

        <GuideBox>
          <img src={K3} alt='rentIcon' />
          <Typography variant='body2' sx={{fontWeight: '500', fontSize: '20px', color: '#383c45', my: 1}}>
            Rating Guides
          </Typography>
          <Box sx={{cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Typography variant='body2' sx={{fontWeight: 'bold', fontSize: '14px', color: '#0689ff'}}>
              How to rent
            </Typography>
            <ArrowRightAltIcon style={{color: '#0689ff'}} />
          </Box>
        </GuideBox>

        <GuideBox>
          <img src={K2} alt='sellIcon' />
          <Typography variant='body2' sx={{fontWeight: '500', fontSize: '20px', color: '#383c45', my: 1}}>
            Selling Guides
          </Typography>
          <Box sx={{cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Typography variant='body2' sx={{fontWeight: 'bold', fontSize: '14px', color: '#0689ff'}}>
              How to sell
            </Typography>
            <ArrowRightAltIcon style={{color: '#0689ff'}} />
          </Box>
        </GuideBox>       
      </GuidesBox>

      <CustomButton backgroundColor='#0f184c' color='#fff' buttonText='See Full Guides' guideBtn={true} />
    </Box>
  )
}

export default Guide