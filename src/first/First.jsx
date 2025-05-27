import React, { useRef, useEffect, useState } from 'react';
import './First.css';
import './Manabtext.css';
import HorizontalNonLinearStepper from './Skills';
import {
  Box,
  Typography,
  Avatar,
  Grid,
  Container,
  Tooltip,
  Dialog,
  DialogContent,
  IconButton,
  Button,
  Fade,
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SiGitlab } from 'react-icons/si';
import profilePic from '../Images/profile.png';

function First() {
  const aboutRef = useRef(null);
  const theme = useTheme();
  const [openImage, setOpenImage] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true); // triggers fade on mount
  }, []);

  const handleScroll = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="first" style={{ background: theme.palette.background.default, minHeight: '100vh' }}>
      <Fade in={fadeIn} timeout={500}>
        <Container maxWidth="md" sx={{ mt: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar
              alt="Portrait of Manab Pokhrel"
              src={profilePic}
              sx={{
                width: { xs: 100, sm: 130 },
                height: { xs: 100, sm: 130 },
                mb: 2,
                boxShadow: 3,
                cursor: 'pointer',
              }}
              onClick={() => setOpenImage(true)}
            />

            <Dialog open={openImage} onClose={() => setOpenImage(false)} maxWidth="sm" fullWidth>
              <DialogContent sx={{ position: 'relative', p: 0 }}>
                <IconButton
                  aria-label="Close image preview"
                  onClick={() => setOpenImage(false)}
                  sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    color: '#fff',
                    background: 'rgba(0,0,0,0.5)',
                    '&:hover': { background: 'rgba(0,0,0,0.7)' },
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <img
                  src={profilePic}
                  alt="Larger portrait of Manab Pokhrel"
                  loading="lazy"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </DialogContent>
            </Dialog>

            <div className="wave-text">
              {'Manab Pokhrel'.split('').map((char, i) => (
                <span
                  key={i}
                  className="wave-char"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </div>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, mt: 2 }}>
              <Tooltip title="GitHub" arrow>
                <a href="https://github.com/manabpokhrel7" target="_blank" rel="noreferrer" aria-label="GitHub Profile">
                  <GitHubIcon
                    fontSize="large"
                    sx={{
                      color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
                      transition: '0.3s',
                      '&:hover': {
                        color: '#D70040',
                        transform: 'scale(1.2)',
                      },
                    }}
                  />
                </a>
              </Tooltip>

              <Tooltip title="GitLab" arrow>
                <a href="https://gitlab.com/users/manabpokhrel7/projects" target="_blank" rel="noreferrer" aria-label="GitLab Projects">
                  <SiGitlab
                    size={30}
                    style={{
                      color: '#FC6D26',
                      transition: '0.3s',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </a>
              </Tooltip>

              <Tooltip title="LinkedIn" arrow>
                <a href="https://www.linkedin.com/in/manab-pokhrel/" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile">
                  <LinkedInIcon
                    fontSize="large"
                    sx={{
                      color: '#0e76a8',
                      transition: '0.3s',
                      '&:hover': {
                        color: '#D70040',
                        transform: 'scale(1.2)',
                      },
                    }}
                  />
                </a>
              </Tooltip>

              <Button
                variant="outlined"
                size="small"
                href="https://docs.google.com/document/d/1db9Q4XpLDRNKhTeN0RUa4Ff9rhNBuT3nVlyyHbCjekA/edit?usp=sharing"
                target="_blank"
                className="custom-button"
                sx={{
                  color: '#D70040',
                  borderColor: '#D70040',
                  '&:hover': {
                    backgroundColor: '#D70040',
                    color: '#fff',
                  },
                }}
              >
                View Resume
              </Button>
            </Box>
          </Box>

          <HorizontalNonLinearStepper />

          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="outlined"
              size="large"
              className="custom-button"
              onClick={handleScroll}
              sx={{
                color: '#D70040',
                borderColor: '#D70040',
                mt: 4,
                mb: 6,
                '&:hover': {
                  backgroundColor: '#D70040',
                  color: '#fff',
                },
              }}
            >
              SEE PORTFOLIO
            </Button>
          </Box>
        </Container>
      </Fade>

      {/* PORTFOLIO SECTION - NO DELAY */}
      <div ref={aboutRef}>
        <Container maxWidth="lg" sx={{ py: 6, backgroundColor: theme.palette.background.paper }}>
          <Typography variant="h4" align="center" gutterBottom>
            Portfolio
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {/* Add your animated project cards here */}
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default First;
