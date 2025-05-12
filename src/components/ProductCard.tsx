import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import type { Product } from '../types/types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image || 'https://via.placeholder.com/300'}
        alt={product.name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" color="text.primary" sx={{ mt: 2 }}>
          {product.price.toFixed(0)} $00
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          data-testid={`add-to-cart-${product.id}`}
          size="small"
          color="primary"
          startIcon={<AddShoppingCartIcon />}
          onClick={() => onAddToCart(product)}
          fullWidth
        >
          Adicionar
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;