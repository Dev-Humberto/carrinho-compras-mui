import React from 'react';
import { 
  Typography, 
  Button, 
  Paper, 
  List, 
  ListItem, 
  Divider 
} from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import type { CartItem } from '../types/types';

interface CartSummaryProps {
  cartItems: CartItem[];
  onCheckout: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({ cartItems, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Resumo do Pedido
      </Typography>
      <List>
        <ListItem>
          <Typography>Itens:</Typography>
          <Typography sx={{ flexGrow: 1, textAlign: 'right' }}>
            {itemCount}
          </Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <Typography variant="h6">Total:</Typography>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'right' }}>
            {total.toFixed(0)} $00
          </Typography>
        </ListItem>
      </List>
      <Button
        data-testid="checkout-button"
        variant="contained"
        color="primary"
        fullWidth
        size="large"
        startIcon={<ShoppingCartCheckoutIcon />}
        onClick={onCheckout}
        disabled={cartItems.length === 0}
        sx={{ mt: 2 }}
      >
        Finalizar Compra
      </Button>
    </Paper>
  );
};

export default CartSummary;