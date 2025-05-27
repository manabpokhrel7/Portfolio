import React, { useRef, useEffect } from 'react';
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
  Container,
  Tooltip,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
  SiGitlab,
  SiTerraform,
  SiAnsible,
  SiDocker,
  SiHelm,
  SiKubernetes,
  SiMysql,
  SiWordpress
} from 'react-icons/si';
import profilePic from '../Images/profile.jpg';
import project1Image from '../Images/project1.png';
import project2Image from '../Images/project2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function First() {
  const aboutRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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


            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 2,
                mt: 2,
              }}
            >
              <Tooltip title="GitHub" arrow>
                <a href="https://github.com/manabpokhrel7" target="_blank" rel="noreferrer">
                  <GitHubIcon
                    fontSize="large"
                    sx={{
                      color: '#000',
                      transition: '0.3s',
                      '&:hover': { color: '#D70040', transform: 'scale(1.2)' },
                    }}
                  />
                </a>
              </Tooltip>

              <Tooltip title="GitLab" arrow>
                <a href="https://gitlab.com/users/manabpokhrel7/projects" target="_blank" rel="noreferrer">
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
                <a href="https://www.linkedin.com/in/manab-pokhrel/" target="_blank" rel="noreferrer">
                  <LinkedInIcon
                    fontSize="large"
                    sx={{
                      color: '#0e76a8',
                      transition: '0.3s',
                      '&:hover': { color: '#D70040', transform: 'scale(1.2)' },
                    }}
                  />
                </a>
              </Tooltip>

              <Button
                variant="outlined"
                size="small"
                href="https://docs.google.com/document/d/1db9Q4XpLDRNKhTeN0RUa4Ff9rhNBuT3nVlyyHbCjekA/edit?usp=sharing"
                target="_blank"
                sx={{
                  ml: isMobile ? 0 : 2,
                  mt: isMobile ? 2 : 0,
                  color: '#D70040',
                  borderColor: '#D70040',
                  '&:hover': {
                    backgroundColor: '#D70040',
                    color: '#fff',
                    borderColor: '#D70040',
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
            <Grid item xs={12} sm={6} md={4} data-aos="fade-up">
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
                    style={{
                      width: '100%',
                      height: '180px',
                      objectFit: 'cover',
                      borderRadius: 4,
                    }}
                  />
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    Terraform-Ansible EC2 Runner
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Provisioned an EC2 instance using Terraform and configured it as a self-hosted GitLab Runner using Ansible.
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 1 }}>
                    <SiTerraform size={20} />
                    <SiAnsible size={20} />
                    <SiDocker size={20} />
                  </Box>
                </Paper>
              </a>
            </Grid>

            <Grid item xs={12} sm={6} md={4} data-aos="fade-up" data-aos-delay="200">
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
                    style={{
                      width: '100%',
                      height: '180px',
                      objectFit: 'cover',
                      borderRadius: 4,
                    }}
                  />
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    Helm: WordPress + MySQL
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Deployed WordPress with MySQL on Kubernetes using Helm charts.
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 1 }}>
                    <SiHelm size={20} />
                    <SiKubernetes size={20} />
                    <SiWordpress size={20} />
                    <SiMysql size={20} />
                  </Box>
                </Paper>
              </a>
            </Grid>
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button
              variant="contained"
              color="secondary"
              href="https://gitlab.com/users/manabpokhrel7/projects"
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
