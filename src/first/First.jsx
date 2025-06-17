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
  Chip,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SiGitlab } from 'react-icons/si';
import profilePic from '../Images/profile.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const certifications = [
  {
    title: "Terraform Certified Associate (HCTAO-003)",
    issuer: "HashiCorp",
    logo: "https://images.credly.com/images/ed4be915-68f8-428a-b332-40ded9084ee5/blob",
    link: "https://www.credly.com/badges/580ecf8f-968b-45c2-b1c8-ef6b7902828a/public_url",
    issueDate: "June 16, 2025",
    credentialId: "580ecf8f-968b-45c2-b1c8-ef6b7902828a",
    tags: ["DevOps", "Cloud", "IaC"],
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    logo: "https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
    link: "https://www.credly.com/badges/c2725ab4-5508-43b3-afd6-8328caa90d0c/public_url",
    issueDate: "Dec 2024",
    credentialId: "6995b40c3fc1464b9df27de62f0dda4d",
    tags: ["Cloud", "Architecture", "AWS"],
  },
  {
    title: "Red Hat Certified System Administrator (RHCSA)",
    issuer: "Udemy (Course Completion)",
    logo: "https://udemy-certificate.s3.amazonaws.com/image/UC-a6f6e252-3098-4fc8-9dc6-00f7defae7fc.jpg",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-a6f6e252-3098-4fc8-9dc6-00f7defae7fc.jpg",
    issueDate: "March 18,2025",
    credentialId: "UC-a6f6e252-3098-4fc8-9dc6-00f7defae7fc",
    tags: ["Linux", "SysAdmin", "Shell"],
  },
];

const aosAnimations = ['fade-up', 'fade-down', 'zoom-in', 'flip-left', 'flip-up'];

const CertificationSection = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [openModal, setOpenModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const sortedCerts = [...certifications].sort(
    (a, b) => new Date(b.issueDate) - new Date(a.issueDate)
  );

  const handleOpenModal = (cert) => {
    setSelectedCert(cert);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedCert(null);
  };

  return (
    <Box sx={{ py: 6, backgroundColor: theme.palette.background.paper }}>
      <Typography variant="h4" align="center" gutterBottom>
        Certifications
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {sortedCerts.map((cert, index) => {
          const animation = aosAnimations[index % aosAnimations.length];

          return (
            <Grid item xs={12} sm={6} md={4} key={index} data-aos={animation}>
              <Tooltip title={`Issued: ${new Date(cert.issueDate).toLocaleDateString()}`} arrow>
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
                  onClick={() => handleOpenModal(cert)}
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
                  <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
                    {cert.tags.map((tag, tagIndex) => (
                      <Chip key={tagIndex} label={tag} size="small" color="secondary" variant="outlined" />
                    ))}
                  </Box>
                </Box>
              </Tooltip>
            </Grid>
          );
        })}
      </Grid>

      <Dialog open={openModal} onClose={handleCloseModal} maxWidth="md" fullWidth>
        <DialogContent sx={{ position: 'relative', p: 3 }}>
          <IconButton
            aria-label="Close"
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

          {selectedCert && (
            <Box sx={{ textAlign: 'center' }}>
              <img
                src={selectedCert.logo}
                alt={selectedCert.title}
                style={{ maxWidth: 120, borderRadius: 8, marginBottom: 10 }}
              />
              <Typography variant="h6">{selectedCert.title}</Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                {selectedCert.issuer}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                <strong>Issued:</strong> {new Date(selectedCert.issueDate).toLocaleDateString()}
              </Typography>
              <Typography variant="body2">
                <strong>ID:</strong> {selectedCert.credentialId}
              </Typography>
              <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1 }}>
                {selectedCert.tags.map((tag, i) => (
                  <Chip key={i} label={tag} size="small" color="primary" />
                ))}
              </Box>
              <Button
                variant="contained"
                color="secondary"
                href={selectedCert.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mt: 2 }}
              >
                View Credential
              </Button>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

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
                  aria-label="Close"
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
