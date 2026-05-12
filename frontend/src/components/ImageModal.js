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

const ImageModal = ({ open, onClose, imageUrl, title, description, details = [] }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const imageDetails = [description, ...details].filter(Boolean);

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
          color: 'white',
          margin: { xs: 0, sm: 2 },
          width: { xs: '100%', sm: 'auto' },
          maxWidth: { xs: '100vw', sm: 'calc(100vw - 32px)' },
          overflowX: 'hidden'
        }
      }}
    >
      <DialogTitle sx={{ 
        display: 'flex', 
        justifyContent: 'flex-end', 
        alignItems: 'center',
        padding: 2
      }}>
        <IconButton
          onClick={onClose}
          sx={{ color: 'white' }}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ padding: { xs: 1.5, sm: 2 }, textAlign: 'center', overflowX: 'hidden' }}>
        <Box
          component="img"
          src={imageUrl}
          alt={title}
          sx={{
            maxWidth: '100%',
            width: '100%',
            maxHeight: '80vh',
            objectFit: 'contain',
            borderRadius: 1,
            display: 'block',
            margin: '0 auto'
          }}
        />
        {(title || imageDetails.length > 0) && (
          <Box
            sx={{
              marginTop: 2,
              textAlign: 'left'
            }}
          >
            {title && (
              <Typography
                variant="h6"
                component="div"
                sx={{ display: 'block', opacity: 0.9 }}
              >
                {title}
              </Typography>
            )}
            {imageDetails.map((detail, index) => (
              <Typography
                key={`${detail}-${index}`}
                variant="body2"
                component="div"
                sx={{ display: 'block', opacity: 0.8 }}
              >
                {detail}
              </Typography>
            ))}
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
