import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import './Arrow.css';

const images = [
  {
    url: '/images/web.png',
    title: 'ReactJS',
    width: '30%',
  },
  {
    url: '/images/photo.jpg',
    title: 'Photoshop',
    width: '30%',
  },
];

const contentForImages = [
  {
    title: 'Web Development',
    content: 'Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.',
  },
  {
    title: 'Photoshop',
    content: 'Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS. It was originally created in 1987 by Thomas and John Knoll. Since then, the software has become the most used tool for professional digital art, especially in raster graphics editing. Photoshop is a photo editing and raster graphic design software which allows users to create, edit, and manipulate various graphics as well as digital art. It also allows to create and edit raster images with multiple layers and import the images in various file formats.',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    marginTop: '1%!important',
    margin: 'auto',
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
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

const ModalContent = styled('div')(({ theme }) => ({
  maxHeight: '60vh', // Set a maximum height for the modal content
  overflowY: 'auto', // Enable vertical scrolling when content overflows
}));

const ModalImage = styled('img')({
  maxWidth: '100%', // Ensure the image fits within the modal
  maxHeight: '100%', // Ensure the image fits within the modal
});

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
              width: '40vw', // Set modal width
            }}
          >
            <ModalImage src={currentImage.url} alt={currentImage.title} />
            <Typography variant="h6">{currentImage.title}</Typography>
            <ModalContent>
              <p>{contentForImages[images.indexOf(currentImage)].content}</p>
            </ModalContent>
          </Box>
        </Modal>
      )}
    </Box>
  );
}
