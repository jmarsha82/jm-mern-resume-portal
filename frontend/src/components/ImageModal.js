import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ImageModal = ({ open, onClose, imageUrl, title, description }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      fullScreen={fullScreen}
      PaperProps={{
        sx: {
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          color: 'white'
        }
      }}
    >
      <DialogTitle sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: 2
      }}>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <IconButton
          onClick={onClose}
          sx={{ color: 'white' }}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ padding: 2, textAlign: 'center' }}>
        <Box
          component="img"
          src={imageUrl}
          alt={title}
          sx={{
            maxWidth: '100%',
            maxHeight: '80vh',
            objectFit: 'contain',
            borderRadius: 1
          }}
        />
        {description && (
          <Typography variant="body2" sx={{ marginTop: 2, opacity: 0.8 }}>
            {description}
          </Typography>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
