//ProductDetail.js
import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const ProductDetail = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={`https://picsum.photos/400/300?random=${product.id}`}
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
    </Card>
  );
};

export default ProductDetail;
