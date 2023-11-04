import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import './Arrow.css';

const images = [
  {
    url: './web.png',
    title: 'ReactJS',
    width: '30%',
  },
  {
    url: './photo.jpg',
    title: 'Photoshop',
    width: '30%',
  },
];

const contentForImages = [
  {
    title: 'Breakfast',
    content: 'Content for the Breakfast modal.',
  },
  {
    title: 'Burgers',
    content: 'Content for the Burgers modal.',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '90%',
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBaseDemo() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState(null);

  const handleOpenModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Box
      sx={{
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column', // Make it vertical
        width: '100%',
        justifyContent: 'center',
      }}
    >
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
            marginBottom: '5%', // Added margin between modals
          }}
          onClick={() => handleOpenModal(image)}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}

      {currentImage && (
        <Modal open={modalOpen} onClose={handleCloseModal}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
            }}
          >
            <img src={currentImage.url} alt={currentImage.title} />
            <Typography variant="h6">{currentImage.title}</Typography>
            <p>{contentForImages[images.indexOf(currentImage)].content}</p>
          </Box>
        </Modal>
      )}
    </Box>
  );
}
