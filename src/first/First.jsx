import React, { useRef } from 'react';
import './First.css';
import './Manabtext.css';
import SlideInSection from '../SlideInSection';
import Button from '@mui/material/Button';
import HorizontalNonLinearStepper from './Skills';
import {
  Box,
  Typography,
  Avatar,
  Grid,
  Paper,
  Container
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SiGitlab } from 'react-icons/si';
import profilePic from '../Images/profile.jpg';
import project1Image from '../Images/project1.png'; // Replace with a Terraform/Ansible related image
import project2Image from '../Images/project2.png'; // Replace with a Helm/WordPress image

function First() {
  const aboutRef = useRef(null);
  const theme = useTheme();

  const handleScroll = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="first"
      style={{
        background:
          theme.palette.mode === 'dark'
            ? theme.palette.background.default
            : 'linear-gradient(180deg, #fff, #f8f8f8)',
      }}
    >
      <SlideInSection>
        <Container maxWidth="md" sx={{ mt: 6 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar
              alt="Manab Pokhrel"
              src={profilePic}
              sx={{
                width: 130,
                height: 130,
                mb: 2,
                border: '3px solid #D70040',
                boxShadow: 3,
              }}
            />
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
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 2 }}>
              <a href="https://github.com/manabpokhrel7" target="_blank" rel="noreferrer">
                <GitHubIcon fontSize="large" sx={{ color: '#000', transition: '0.3s', '&:hover': { color: '#D70040', transform: 'scale(1.2)' } }} />
              </a>
              <a href="https://gitlab.com/manabpokhrel7" target="_blank" rel="noreferrer">
                <SiGitlab size={30} style={{ color: '#FC6D26', transition: '0.3s' }} onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')} onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
                <LinkedInIcon fontSize="large" sx={{ color: '#0e76a8', transition: '0.3s', '&:hover': { color: '#D70040', transform: 'scale(1.2)' } }} />
              </a>
            </Box>
          </Box>

          <HorizontalNonLinearStepper />

          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="outlined"
              size="large"
              sx={{
                color: '#D70040',
                borderColor: '#D70040',
                mt: 4,
                mb: 6,
                '&:hover': {
                  backgroundColor: '#D70040',
                  color: '#fff',
                  borderColor: '#D70040',
                },
              }}
              onClick={handleScroll}
            >
              SEE PORTFOLIO
            </Button>
          </Box>
        </Container>
      </SlideInSection>

      <div ref={aboutRef}>
        <Container maxWidth="lg" sx={{ py: 6, backgroundColor: theme.palette.background.paper }}>
          <Typography variant="h4" align="center" gutterBottom>
            Portfolio
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <a
                href="https://gitlab.com/manabpokhrel7/terraform-ansible-ec2-selfhostedrunner"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Paper
                  elevation={4}
                  sx={{
                    padding: 2,
                    textAlign: 'center',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <img
                    src={project1Image}
                    alt="Terraform Ansible Project"
                    style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: 4 }}
                  />
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    Terraform-Ansible EC2 Runner
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Provisioned an EC2 instance using Terraform and configured it as a self-hosted GitLab Runner using Ansible. Supports Docker builds with secure tagging and privileges.
                  </Typography>
                </Paper>
              </a>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <a
                href="https://gitlab.com/manabpokhrel7/helm-wp-mysql"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Paper
                  elevation={4}
                  sx={{
                    padding: 2,
                    textAlign: 'center',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <img
                    src={project2Image}
                    alt="Helm WordPress MySQL Project"
                    style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: 4 }}
                  />
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    Helm: WordPress + MySQL
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Deployed a WordPress site with MySQL on Kubernetes using Helm charts. Configured PVCs, services, ingress, and auto-scaling for high availability and ease of updates.
                  </Typography>
                </Paper>
              </a>
            </Grid>
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button
              variant="contained"
              color="secondary"
              href="https://gitlab.com/manabpokhrel7"
              target="_blank"
              sx={{
                backgroundColor: '#FC6D26',
                '&:hover': {
                  backgroundColor: '#e65c1c',
                },
              }}
            >
              View All Projects on GitLab
            </Button>
          </Box>
        </Container>
      </div>
    </div>
  );
}

export default First;
