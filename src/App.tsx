import React, { useState } from 'react';
import { 
  Container, 
  Grid,
  Typography, 
  CssBaseline,
  AppBar,
  Toolbar,
  Badge,
  IconButton,
  Drawer,
  Box
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ProductCard from './components/ProductCard';
import CartSummary from './components/CartSummary';
import CartItemComponent from './components/CartItem';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import type { CartItem, Product } from './types/types';

// imagens locais
import futsal1 from './assets/img/futsal1.jpeg';
import futsal2 from './assets/img/futsal2.jpg';
import futsal3 from './assets/img/futsal3.jpg';
import futsal4 from './assets/img/futsal4.jpeg';
import Footer from './components/Footer';
import CheckoutDialog from './components/CheckoutDialog';


const App: React.FC = () => {
  // Dados de exemplo
  const initialProducts: Product[] = [
    { 
      id: 1, 
      name: 'Topper', 
      price: 4500, 
      description: 'Tenis Futsal Topper', 
      image: futsal1 
    },
    { 
      id: 2, 
      name: 'Cr Cronos', 
      price: 5000, 
      description: 'Tenis Futsal Quadra Cr Cronos', 
      image: futsal2
    },
    { 
      id: 3, 
      name: 'Indoor Nike', 
      price: 6000, 
      description: 'Chuteira Futsal Indoor Nike Beco 2', 
      image: futsal3 
    },
    { 
      id: 4, 
      name: 'Umbro Pro 5', 
      price: 5500, 
      description: 'Chuteira Futsal Umbro Pro 5 Bump', 
      image: futsal4 
    }
  ];

  const [products] = useState<Product[]>(initialProducts);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutTotal, setCheckoutTotal] = useState(0);

  const handleCheckout = () => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setCheckoutTotal(total);
    setCheckoutOpen(true);
    setCartItems([]);
    setCartOpen(false);
  };

  const handleCloseCheckout = () => {
    setCheckoutOpen(false);
  };

  const totalItems = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Loja Vite + MUI
            </Typography>
            <IconButton 
              data-testid="cart-button"
              color="inherit" 
              onClick={() => setCartOpen(true)}
              aria-label="carrinho"
            >
              <Badge data-testid="cart-badge" badgeContent={totalItems} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Produtos
          </Typography>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <ProductCard product={product} onAddToCart={addToCart} />
              </Grid>
            ))}
          </Grid>
        </Container>

        <Footer />
      </Box>

      <Drawer
        anchor="right"
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        sx={{ '& .MuiDrawer-paper': { width: { xs: '100%', sm: 400 }, p: 2 } }}
      >
        <Typography variant="h4" gutterBottom>
          Carrinho
        </Typography>
        {cartItems.length === 0 ? (
          <Typography variant="body1">Seu carrinho está vazio</Typography>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItemComponent
                key={item.id}
                item={item}
                onRemove={removeFromCart}
                onQuantityChange={updateQuantity}
              />
            ))}
            <CartSummary cartItems={cartItems} onCheckout={handleCheckout} />
          </>
        )}
      </Drawer>

      <CheckoutDialog 
        open={checkoutOpen} 
        total={checkoutTotal} 
        onClose={handleCloseCheckout} 
      />
    </ThemeProvider>
  );
};

export default App;