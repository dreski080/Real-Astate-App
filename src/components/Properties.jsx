import { Box, Container, Typography, styled } from '@mui/material'
import React from 'react'

// compon
import House from './House'

// Data
import { properties } from '../data/Properties'


function Properties() {
  const PropertiesBox = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(5),
    [theme.breakpoints.down('md')] : {
      flexDirection: 'column',
      alignItems: 'center'
    }
  }))

  const PropertiesTextBox = styled(Box)(({theme}) => ({
    [theme.breakpoints.down('md')] : {
      textAlign: 'center'
    }
  }))

  return (
    <Box sx={{mt: 5, backgroundColor: '#f5fafa', py: 10}}>
      <Container>
        <PropertiesTextBox>
          <Typography sx={{color: '#000339', fontSize: '35px', fontWeight: 'bold'}}>
            Featured Properties
          </Typography>
          <Typography sx={{color: '#5a6473', fontSize: '16px', mt: 1}}>
            Everything you need to know when looking for a new home!
          </Typography>
        </PropertiesTextBox>

        <PropertiesBox>
          {
            properties.map((property) => (
              <House key={property.id} img={property.img} price={property.price} address={property.address} bedrooms={property.bedrooms} bathrooms={property.bathrooms} space={property.space} />
            ))
          }
        </PropertiesBox>
      </Container>
    </Box>
  )
}

export default Properties