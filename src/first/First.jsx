import React, { useRef, useEffect, useState } from 'react';
import './First.css';
import './Manabtext.css';
import SlideInSection from '../SlideInSection';
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
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SiGitlab } from 'react-icons/si';
import profilePic from '../Images/profile.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Extended certifications array with metadata
const certifications = [
  {
    title: "Terraform Certified Associate (HCTAO-003)",
    issuer: "HashiCorp",
    logo: "https://images.credly.com/images/ed4be915-68f8-428a-b332-40ded9084ee5/blob",
    link: "https://www.credly.com/badges/580ecf8f-968b-45c2-b1c8-ef6b7902828a/public_url",
    issueDate: "March 15, 2024",
    credentialId: "HC-TFAO-003-987654321",
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    logo: "https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
    link: "https://www.credly.com/badges/c2725ab4-5508-43b3-afd6-8328caa90d0c/public_url",
    issueDate: "June 2, 2023",
    credentialId: "AWS-ASA-123456789",
  },
  {
    title: "Red Hat Certified System Administrator (RHCSA)",
    issuer: "Udemy (Course Completion)",
    logo: "https://udemy-certificate.s3.amazonaws.com/image/UC-a6f6e252-3098-4fc8-9dc6-00f7defae7fc.jpg",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-a6f6e252-3098-4fc8-9dc6-00f7defae7fc.jpg",
    issueDate: "April 5, 2022",
    credentialId: "RHCSA-UDEMY-555888777",
  },
];

// Random AOS animations
const aosAnimations = ['fade-up', 'fade-down', 'zoom-in', 'flip-left', 'flip-up'];

// Certification section
const CertificationSection = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedImage(null);
  };

  return (
    <Box sx={{ py: 6, backgroundColor: theme.palette.background.paper }}>
      <Typography variant="h4" align="center" gutterBottom>
        Certifications
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {certifications.map((cert, index) => {
          const animation = aosAnimations[index % aosAnimations.length];
          return (
            <Grid item xs={12} sm={6} md={4} key={index} data-aos={animation}>
              <Tooltip title={`Issued on: ${cert.issueDate}`} arrow>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    boxShadow: 3,
                    textAlign: 'center',
                    transition: '0.3s',
                    height: '100%',
                    backgroundColor: isDark ? '#1e1e1e' : '#fff',
                    color: isDark ? '#e0e0e0' : '#000',
                    '&:hover': { boxShadow: 6 },
                    cursor: 'pointer',
                  }}
                  onClick={() => handleOpenModal(cert.logo)}
                >
                  <img
                    src={cert.logo}
                    alt={cert.title}
                    style={{
                      width: 80,
                      height: 'auto',
                      marginBottom: 10,
                      borderRadius: 6,
                      backgroundColor: isDark ? '#fff' : 'transparent',
                      padding: isDark ? '4px' : 0,
                    }}
                  />
                  <Typography variant="h6" gutterBottom>{cert.title}</Typography>
                  <Typography variant="body2" sx={{ color: isDark ? '#ccc' : '#555' }}>
                    {cert.issuer}
                  </Typography>
                  <Typography variant="caption" display="block" sx={{ mt: 1, fontSize: '0.75rem', color: '#888' }}>
                    ID: {cert.credentialId}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 1 }}>
                    <Button
                      variant="text"
                      size="small"
                      href={cert.link}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      sx={{ color: '#D70040' }}
                    >
                      View
                    </Button>
                    <Button
                      variant="text"
                      size="small"
                      href={cert.logo}
                      download
                      onClick={(e) => e.stopPropagation()}
                      sx={{ color: '#1976d2' }}
                    >
                      Download
                    </Button>
                  </Box>
                </Box>
              </Tooltip>
            </Grid>
          );
        })}
      </Grid>

      {/* Modal */}
      <Dialog open={openModal} onClose={handleCloseModal} maxWidth="md" fullWidth>
        <DialogContent sx={{ position: 'relative', p: 0 }}>
          <IconButton
            aria-label="Close image preview"
            onClick={handleCloseModal}
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
              color: '#fff',
              background: 'rgba(0,0,0,0.5)',
              '&:hover': { background: 'rgba(0,0,0,0.7)' },
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={selectedImage}
            alt="Certificate Preview"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

// Main component (rest of your existing First.js with your photo, links, skills, portfolio)
function First() {
  const aboutRef = useRef(null);
  const theme = useTheme();
  const [openImage, setOpenImage] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleScroll = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="first" style={{ background: theme.palette.background.default, minHeight: '100vh' }}>
      <SlideInSection>
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
                <span key={i} className="wave-char" style={{ animationDelay: `${i * 0.1}s` }}>
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </div>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, mt: 2 }}>
              <Tooltip title="GitHub" arrow>
                <a href="https://github.com/manabpokhrel7" target="_blank" rel="noreferrer">
                  <GitHubIcon fontSize="large" sx={{ color: theme.palette.mode === 'dark' ? '#fff' : '#000', '&:hover': { color: '#D70040', transform: 'scale(1.2)' } }} />
                </a>
              </Tooltip>
              <Tooltip title="GitLab" arrow>
                <a href="https://gitlab.com/users/manabpokhrel7/projects" target="_blank" rel="noreferrer">
                  <SiGitlab size={30} style={{ color: '#FC6D26', transition: '0.3s' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.2)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}/>
                </a>
              </Tooltip>
              <Tooltip title="LinkedIn" arrow>
                <a href="https://www.linkedin.com/in/manab-pokhrel/" target="_blank" rel="noreferrer">
                  <LinkedInIcon fontSize="large" sx={{ color: '#0e76a8', '&:hover': { color: '#D70040', transform: 'scale(1.2)' } }} />
                </a>
              </Tooltip>
              <Button
                variant="outlined"
                size="small"
                href="https://docs.google.com/document/d/1db9Q4XpLDRNKhTeN0RUa4Ff9rhNBuT3nVlyyHbCjekA/edit?usp=sharing"
                target="_blank"
                className="custom-button"
                sx={{ color: '#D70040', borderColor: '#D70040', '&:hover': { backgroundColor: '#D70040', color: '#fff' } }}
              >
                View Resume
              </Button>
            </Box>
          </Box>

          <HorizontalNonLinearStepper />
          <CertificationSection />

          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="outlined"
              size="large"
              className="custom-button"
              onClick={handleScroll}
              sx={{ color: '#D70040', borderColor: '#D70040', mt: 4, mb: 6, '&:hover': { backgroundColor: '#D70040', color: '#fff' } }}
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
            {/* Add your animated project cards here */}
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default First;
