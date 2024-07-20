//ProductList.js
import React from 'react';
import { Card, CardContent, Typography, CardMedia, Grid, Button, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  return (
    <Grid container spacing={3}>
      {products.map(product => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={`https://picsum.photos/200/300?random=${product.id}`}
              alt={product.productName}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.productName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.company} - {product.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: ${product.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rating: {product.rating}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Discount: {product.discount}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Availability: {product.availability}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component={Link} to={`/products/${product.id}`}>Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
