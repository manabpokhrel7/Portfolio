// WebsitePreview.jsx
import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

import gitlabImage from './gitlab.png';
import githubImage from './git.jpg';

const images = [
  {
    url: gitlabImage,
    title: 'ALL projects in GitLab',
    link: 'https://gitlab.com/users/manabpokhrel7/projects',
  },
  {
    url: githubImage,
    title: 'ALL projects in GitHub',
    link: 'https://github.com/manabpokhrel7?tab=repositories',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 240,
  width: '100%',
  maxWidth: 450,
  overflow: 'hidden',
  borderRadius: theme.shape.borderRadius,
  flex: '1 1 45%',
  backgroundColor: theme.palette.background.paper,
  transition: 'transform 0.3s ease, background-color 0.3s ease',
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: `4px solid ${theme.palette.primary.main}`,
    },
    '& .image-zoom': {
      transform: 'scale(1.05)',
    },
  },
  [theme.breakpoints.down('sm')]: {
    height: 180,
    maxWidth: '100%',
    flex: '1 1 100%',
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transition: 'transform 0.4s ease',
});

const Image = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
});

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
  backgroundColor: theme.palette.primary.main,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function WebsitePreview() {
  const theme = useTheme(); // Get the active theme (dark/light)

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 3,
        width: '100%',
        maxWidth: 1000,
        mx: 'auto',
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          onClick={() => openLink(image.link)}
          aria-label={image.title}
        >
          <ImageSrc
            className="image-zoom"
            style={{ backgroundImage: `url(${image.url})` }}
          />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="h6"
              sx={{
                position: 'relative',
                p: 2,
                fontWeight: 'bold',
                fontSize: { xs: '0.9rem', sm: '1.1rem' },
                color: theme.palette.text.primary,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
