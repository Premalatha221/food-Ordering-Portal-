import * as React from 'react';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';

import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

function MultiActionAreaCard({ image, title, description }) {
  return (
    <Card sx={{ maxWidth: 420 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={image}
          alt={title}
        />
        
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
         <button>Buy Now</button> 
        </Button>
      </CardActions> */}
    </Card>
  );
}

export default function MultiActionAreaCardGrid() {
  const cardData = [
    {
      image: 'https://s3-ap-southeast-1.amazonaws.com/foodvista.1/7238944a-5b2b-4daa-a9f6-7f56b82c3951.jpg',
      
      
    },
    {
      image: 'https://img.pikbest.com/origin/05/81/56/09RpIkbEsT3aN.jpg!w700wp',
      
    },
    {
      image: 'https://s3-ap-southeast-1.amazonaws.com/foodvista.1/b0257a6c-7f48-44b2-837b-c511abf27e74.jpg',
      
    },
    
    // Add more card data as needed
  ];

  return (
    <Grid container spacing={2}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <MultiActionAreaCard {...card} />
        </Grid>
      ))}
    </Grid>
    
  );
}