import React from "react";

import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";                                                                         const bull = (

  <Box 
      component="span"
        
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
              >
                  
                    </Box>
                    );
export default function Category() {
  return (
    <Box
    sx={{

                    backgroundColor:'grey',
                            backgroundSize: 'cover',
                                   minHeight: '100vh', 
                                           display: 'flex',
                                                   alignItems: 'center',
                                                           justifyContent: 'center',
                                                                 }}
                                                                     >
      <br></br>
<Grid container spacing={2} sx={{
  padding:'50px'
}}>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
        
      <CardMedia
        sx={{ height: 400 }}
        image="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/63b1a6f9ee7cdb001cb82225.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
        Ambur Briyani
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹250.00
        </Typography>
        <Button sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Add to Cart</Button>
      </CardContent>
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://www.pavaniskitchen.com/wp-content/uploads/2021/02/chbiryani.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
        Chicken Briyani
        </Typography>
        <Typography variant="body2"  color="black" fontWeight="bold">
        ₹250.00
        </Typography>
        <Button sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Add to Cart</Button>
      </CardContent>
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://veg2nonveg.com/wp-content/uploads/2018/04/mutton-biryani3.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
        Mutton Briyani
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹300.00
        </Typography>
        <Button sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Add to Cart</Button>
      </CardContent>
     
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://theyummydelights.com/wp-content/uploads/2018/06/hyderabadi-chicken-dum-biryani.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
        Hyderabadi Chicken Dum Biryani
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹350.00
        </Typography>
        <Button sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Add to cart</Button>
      </CardContent>
      
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400}}
        image="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2023/01/chips-ketchup-Fast-food-liver-disease-1296x728-header-1024x575.png?w=1155&h=1528"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
        French Fries
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹100.00
        </Typography>
        <Button sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Add to Cart</Button>
      </CardContent>
      
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz_qCQrrhk3-5Ka3sE642GQa11bfXIq__jhA&usqp=CAU"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
        Gobi Manchurian
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹150.00
        </Typography>
        <Button sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Add to Cart</Button>
      </CardContent>
      
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://images.slurrp.com/prodarticles/tkbmz13ik6.webp?impolicy=slurrp-20210601&width=1200&height=900"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
        Pani Puri
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹120.00
        </Typography>
        <Button sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Add to Cart</Button>
      </CardContent>
      
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://i.pinimg.com/736x/eb/e4/23/ebe42322be933ac408fa2b7319173cb8.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
        Fried veg Momos
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹110.00
        </Typography>
        <Button sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Add to Cart</Button>
      </CardContent>
     
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/1:1/w_2560%2Cc_limit/basically-burger-1.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
        Burger
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹300.00
        </Typography>
        <Button sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Buy Now</Button>
      </CardContent>
      
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://static.toiimg.com/photo/51089680.cms"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
        Pizza
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹350.00
        </Typography>
        <Button sx={{
        backgroundColor:'#E1306C',
        color:'white',
        }}>Buy Now</Button>
      </CardContent>
      
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://www.southernliving.com/thmb/UW4kKKL-_M3WgP7pkL6Pb6lwcgM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ham_Sandwich_011-1-49227336bc074513aaf8fdbde440eafe.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
        SandWich
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹200.00
        </Typography>
        <Button sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Add to Cart</Button>
      </CardContent>
      
    </Card>
    </Grid>
<Grid item xs={3}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://sukhis.com/app/uploads/2022/04/image1-8.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="text.secondar" fontSize="medium" fontWeight="medium">
         Samosa
        </Typography>
        <Typography variant="body2" color="black" fontWeight="bold">
        ₹50.00
        </Typography>
        <Button sx={{
        backgroundColor:'#E1306C',
        color:'white',
        padding:'10px'
        }}>Add To Cart</Button>
      </CardContent>
      
    </Card>
    </Grid>




    </Grid>
    </Box>
  );
}