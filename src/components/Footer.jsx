import React from 'react'

// image
import K1 from '../assets/fbicon.png'
import K2 from '../assets/twittericon.png'
import K3 from '../assets/linkedinicon.png'
import { Box, Container, Typography, styled } from '@mui/material'

function Footer() {
  const CustomContainer = styled(Container)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-around',
    gap: theme.spacing(5),
    [theme.breakpoints.down('sm')] : {
      flexDirection: 'column',
      textAlign: 'center'
    }
  }))

  const IconBox = styled(Box)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    [theme.breakpoints.down("sm")] : {
      justifyContent: 'center'
    }
  }))

  const FooterLink = styled('span')(({theme}) => ({
    fontSize: '16px',
    color: '#7a7a7e',
    fontWeight: '300',
    cursor: 'pointer',
    '&:hover' : {
      color: '#000'
    }
  }))

  return (
    <Box sx={{py: 10}}>
      <CustomContainer>
        <CustomContainer>
          <Box>
            <Typography sx={{fontSize: '20px', color: '#1c1c1d', fontWeight: '700', mb: 2}}>
              Products
            </Typography>

            <FooterLink>Listing</FooterLink>
            <br/>
            <FooterLink>Properties</FooterLink>
            <br/>
            <FooterLink>Agents</FooterLink>
            <br/>
            <FooterLink>Blog</FooterLink>
          </Box>

          <Box>
            <Typography sx={{fontSize: '20px', color: '#1c1c1d', fontWeight: '700', mb: 2}}>
              Resources
            </Typography>

            <FooterLink>Our Homes</FooterLink>
            <br/>
            <FooterLink>Stories</FooterLink>
            <br/>
            <FooterLink>Video</FooterLink>
            <br/>
            <FooterLink>Free Trial</FooterLink>
          </Box>

          <Box>
            <Typography sx={{fontSize: '20px', color: '#1c1c1d', fontWeight: '700', mb: 2}}>
              Company
            </Typography>

            <FooterLink>Partnerships</FooterLink>
            <br/>
            <FooterLink>Terms of use</FooterLink>
            <br/>
            <FooterLink>Privacy</FooterLink>
            <br/>
            <FooterLink>Sitemap</FooterLink>
          </Box>

          <Box>
            <Typography sx={{fontSize: '20px', color: '#1c1c1d', fontWeight: '700', mb: 2}}>
              Get in touch
            </Typography>

            <Typography sx={{fontSize: '16px', color: '#7a7a7e', fontWeight: '500', mb: 2}}>
              You'll find your next home, in any style you prefer.
            </Typography>

            <IconBox>
              <img src={K1} alt='fbIcon' style={{cursor: 'pointer'}} />
              <img src={K2} alt='twitterIcon' style={{cursor: 'pointer'}} />
              <img src={K3} alt='linkedinIcon' style={{cursor: 'pointer'}} />
            </IconBox>
          </Box>
        </CustomContainer>
      </CustomContainer>
    </Box>
  )
}

export default Footer