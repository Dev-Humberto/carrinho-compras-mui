import React from 'react';
import { 
  Box,
  Container,
  Grid,
  Link,
  Typography,
  Divider,
  IconButton
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) => 
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Sobre a loja */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Nossa Loja
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              A melhor loja online para suas compras. Qualidade garantida e entrega rápida em todo o país.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Links rápidos */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Links Rápidos
            </Typography>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
              Produtos
            </Link>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
              Promoções
            </Link>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
              Sobre Nós
            </Link>
            <Link href="#" color="inherit" display="block">
              Contato
            </Link>
          </Grid>

          {/* Ajuda */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Ajuda
            </Typography>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
              Política de Entrega
            </Link>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
              Trocas e Devoluções
            </Link>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
              Formas de Pagamento
            </Link>
            <Link href="#" color="inherit" display="block">
              Perguntas Frequentes
            </Link>
          </Grid>

          {/* Contato */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contato
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon sx={{ mr: 1 }} /> contato@minhaloja.cv
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Segunda a Sexta: 9h às 18h
            </Typography>
            <Typography variant="body2">
              Sábado: 9h às 12h
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Minha Loja Online. Todos os direitos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;