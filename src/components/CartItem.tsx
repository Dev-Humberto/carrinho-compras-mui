import React from 'react';
import { 
  Box, 
  Typography, 
  IconButton, 
  Divider, 
  TextField, 
  Grid
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import type { CartItem } from '../types/types';

interface CartItemProps {
  item: CartItem;
  onRemove: (id: number) => void;
  onQuantityChange: (id: number, quantity: number) => void;
}

const CartItemComponent: React.FC<CartItemProps> = ({ item, onRemove, onQuantityChange }) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={3}>
          <Box
            component="img"
            src={item.image || 'https://via.placeholder.com/100'}
            alt={item.name}
            sx={{ width: '100%', height: 'auto', borderRadius: 1 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">{item.name}</Typography>
          <Typography variant="body1" color="text.secondary">
             {item.price.toFixed(0)} $00 un.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <IconButton 
              onClick={() => onQuantityChange(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              <RemoveIcon />
            </IconButton>
            <TextField
              data-testid={`quantity-input-${item.id}`}
              value={item.quantity}
              size="small"
              sx={{ width: 60, mx: 1 }}
              inputProps={{ 
                style: { textAlign: 'center' },
                min: 1,
                type: 'number'
              }}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (!isNaN(value) && value > 0) {
                  onQuantityChange(item.id, value);
                }
              }}
            />
            <IconButton 
              data-testid={`increase-quantity-${item.id}`}
              onClick={() => onQuantityChange(item.id, item.quantity + 1)}
            >
              <AddIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} sx={{ textAlign: 'right' }}>
          <Typography variant="h6">
            {(item.price * item.quantity).toFixed(0)} $00
          </Typography>
          <IconButton 
            data-testid={`remove-item-${item.id}`}
            onClick={() => onRemove(item.id)}
            color="error"
            sx={{ mt: 1 }}
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 2 }} />
    </Box>
  );
};

export default CartItemComponent;