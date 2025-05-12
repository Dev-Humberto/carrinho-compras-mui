import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Typography,
  Box,
  IconButton
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';

interface CheckoutDialogProps {
  open: boolean;
  total: number;
  onClose: () => void;
}

const CheckoutDialog: React.FC<CheckoutDialogProps> = ({ open, total, onClose }) => {
  return (
    <Dialog data-testid="success-dialog" open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CheckCircleIcon color="success" sx={{ fontSize: 30, mr: 1 }} />
          <Typography variant="h6">Compra finalizada!</Typography>
        </Box>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      
      <DialogContent>
        <DialogContentText>
          Sua compra foi processada com sucesso.
        </DialogContentText>
        <Box sx={{ 
          mt: 3,
          p: 2,
          backgroundColor: (theme) => theme.palette.grey[100],
          borderRadius: 1,
          textAlign: 'center'
        }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Valor total da compra:
          </Typography>
          <Typography variant="h4" color="primary">
            {total} $00
          </Typography>
        </Box>
      </DialogContent>
      
      <DialogActions sx={{ p: 3 }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={onClose}
          fullWidth
          size="large"
        >
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CheckoutDialog;