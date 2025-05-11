import React, { useRef } from 'react';
import './First.css';
import './Manabtext.css';
import SlideInSection from '../SlideInSection';
import Button from '@mui/material/Button';
import HorizontalNonLinearStepper from './Skills';
import { Box, Typography, Avatar, Grid, Paper } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profilePic from '../Images/profile.jpg'; // Add your image in this path

function First() {
  const aboutRef = useRef(null);

  const handleScroll = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="first">
      <SlideInSection>
        {/* Intro section with name and profile */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
          <Avatar
            alt="Manab Pokhrel"
            src={profilePic}
            sx={{ width: 130, height: 130, mb: 2, border: '3px solid #D70040' }}
          />
          <h1 style={{ color: "#000" }}>My Name is</h1>
          <div className="waviy">
            <span style={{ '--i': 1 }}>M</span>
            <span style={{ '--i': 2 }}>a</span>
            <span style={{ '--i': 3 }}>n</span>
            <span style={{ '--i': 4 }}>a</span>
            <span style={{ '--i': 5 }}>b</span>&nbsp;&nbsp;
            <span style={{ '--i': 1 }}>P</span>
            <span style={{ '--i': 2 }}>o</span>
            <span style={{ '--i': 3 }}>k</span>
            <span style={{ '--i': 4 }}>h</span>
            <span style={{ '--i': 5 }}>r</span>
            <span style={{ '--i': 6 }}>e</span>
            <span style={{ '--i': 7 }}>l</span>
          </div>

          <Typography variant="subtitle1" sx={{ mt: 1, color: '#555' }}>
            DevOps • Cloud Services • System Admin
          </Typography>

          {/* Social media icons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
              <GitHubIcon fontSize="large" sx={{ color: '#000', '&:hover': { color: '#D70040' } }} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
              <LinkedInIcon fontSize="large" sx={{ color: '#0e76a8', '&:hover': { color: '#D70040' } }} />
            </a>
          </Box>
        </Box>

        {/* Skills Stepper Section */}
        <HorizontalNonLinearStepper />

        {/* Scroll Button */}
        <Button
          variant="outlined"
          size="large"
          style={{ color: "#D70040", marginBottom: '5%', marginTop: '2%' }}
          onClick={handleScroll}
          className="custom-button"
        >
          SEE PORTFOLIO
        </Button>
      </SlideInSection>

      {/* Portfolio Section Placeholder */}
      <div ref={aboutRef}>
        <Box sx={{ padding: 4, backgroundColor: '#f5f5f5' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Portfolio
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
                <Typography variant="h6">Project 1</Typography>
                <Typography variant="body2" color="text.secondary">
                  Description of your first project goes here.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
                <Typography variant="h6">Project 2</Typography>
                <Typography variant="body2" color="text.secondary">
                  Description of your second project goes here.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default First;
