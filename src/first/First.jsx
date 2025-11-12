// First.jsx
import React, { useEffect, useState } from 'react';
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
  Button,
  useTheme,
  Chip,
  Paper,
} from '@mui/material';
import { SiMedium } from "react-icons/si";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SiGitlab } from 'react-icons/si';
import profilePic from '../Images/profile.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

// ---------------- CERTIFICATIONS ----------------
const certifications = [
  {
    title: 'Red Hat Certified System Administrator (RHCSA)',
    issuer: 'Red Hat',
    logo: 'https://images.credly.com/size/220x220/images/572de0ba-2c59-4816-a59d-b0e1687e45ee/image.png',
    link: 'https://www.credly.com/badges/d392a599-34a9-4482-ab5e-5575cf7eaeb7/public_url',
    issueDate: 'Aug 2025',
    tags: ['Linux', 'SysAdmin', 'Shell'],
  },
  {
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    logo: 'https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png',
    link: 'https://www.credly.com/badges/c2725ab4-5508-43b3-afd6-8328caa90d0c/public_url',
    issueDate: 'Dec 2024',
    tags: ['Cloud', 'Architecture', 'AWS'],
  },
  {
    title: 'Terraform Certified Associate (HCTAO-003)',
    issuer: 'HashiCorp',
    logo: 'https://images.credly.com/size/160x160/images/0dc62494-dc94-469a-83af-e35309f27356/blob',
    link: 'https://www.credly.com/badges/580ecf8f-968b-45c2-b1c8-ef6b7902828a/public_url',
    issueDate: 'June 16, 2025',
    tags: ['DevOps', 'Cloud', 'IaC'],
  },
];

// ---------------- EDUCATION & EXPERIENCE ----------------

function First() {
  const theme = useTheme();
  const [openImage, setOpenImage] = useState(false);
  const [openCert, setOpenCert] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  return (
    <Box sx={{ background: 'transparent', color: theme.palette.text.primary, pb: 8 }}>
      <Container maxWidth="lg" sx={{ pt: 6 }}>
        {/* ---------------- HERO SECTION ---------------- */}
        <SlideInSection>
          <Box textAlign="center" mb={6}>
            <Avatar
              alt="Manab Pokhrel"
              src={profilePic}
              sx={{
                width: { xs: 120, sm: 160 },
                height: { xs: 120, sm: 160 },
                mb: 2,
                mx: 'auto',
                boxShadow: 3,
                border: '3px solid #D70040',
                cursor: 'pointer',
              }}
              onClick={() => setOpenImage(true)}
            />
            <Dialog open={openImage} onClose={() => setOpenImage(false)} maxWidth="sm" fullWidth>
              <DialogContent sx={{ p: 0 }}>
                <img src={profilePic} alt="Manab Pokhrel" style={{ width: '100%' }} />
              </DialogContent>
            </Dialog>

            <Typography variant="h4" fontWeight={700} mb={1}>
              Manab Pokhrel
            </Typography>

            <Typography
              variant="body1"
              sx={{
                opacity: 0.9,
                mb: 3,
                maxWidth: 720,
                mx: 'auto',
                lineHeight: 1.8,
              }}
            >
	    System Administrator | Cloud Architect | DevOps | Infrastructure Automation, CI/CD, AWS/Azure/GCP & Kubernetes/Terraform/Ansible
            </Typography>

            {/* Social Icons */}
            <Box display="flex" justifyContent="center" gap={2} mb={3}>
	      <Tooltip title="Medium">
               <a
                 href="https://medium.com/@manabpokhrel7"
                 target="_blank"
                 rel="noreferrer"
               >
                 <SiMedium
                   size={30}
                   style={{
                     color: theme.palette.mode === "dark" ? "#fff" : "#000",
                     transition: "0.3s ease",
                   }}
                   onMouseOver={(e) => (e.currentTarget.style.color = "#D70040")}
                   onMouseOut={(e) =>
                     (e.currentTarget.style.color =
                       theme.palette.mode === "dark" ? "#fff" : "#000")
                   }
                 />
               </a>
             </Tooltip>
              <Tooltip title="GitLab">
                <a href="https://gitlab.com/users/manabpokhrel7/projects" target="_blank" rel="noreferrer">
                  <SiGitlab size={30} style={{ color: '#FC6D26' }} />
                </a>
              </Tooltip>
              <Tooltip title="LinkedIn">
                <a href="https://www.linkedin.com/in/manab-pokhrel/" target="_blank" rel="noreferrer">
                  <LinkedInIcon
                    fontSize="large"
                    sx={{
                      color: '#0e76a8',
                      '&:hover': { color: '#D70040' },
                    }}
                  />
                </a>
              </Tooltip>
            </Box>
          </Box>
        </SlideInSection>

        {/* ---------------- SKILLS + CERTIFICATIONS ---------------- */}
        <Grid container spacing={6} alignItems="stretch">
          <Grid item xs={12} md={6}>
            <SlideInSection>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  backgroundColor:
                    theme.palette.mode === 'dark'
                      ? theme.palette.background.paper
                      : '#f7f7f7',
                }}
              >
                <HorizontalNonLinearStepper />
              </Paper>
            </SlideInSection>
          </Grid>

          <Grid item xs={12} md={6}>
            <SlideInSection>
              <Grid container spacing={3}>
                {certifications.map((cert, i) => (
                  <Grid item xs={12} key={i}>
                    <Paper
                      onClick={() => setOpenCert(cert)}
                      sx={{
                        p: 3,
                        borderRadius: 3,
                        boxShadow: 2,
                        cursor: 'pointer',
                        transition: '0.3s',
                        backgroundColor:
                          theme.palette.mode === 'dark'
                            ? theme.palette.background.paper
                            : '#fff',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: 5,
                        },
                      }}
                    >
                      <img
                        src={cert.logo}
                        alt={cert.title}
                        style={{
                          width: 60,
                          marginBottom: 10,
                          display: 'block',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                        }}
                      />
                      <Typography
                        variant="subtitle1"
                        align="center"
                        fontWeight={600}
                        sx={{ mb: 0.5 }}
                      >
                        {cert.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        align="center"
                        sx={{ opacity: 0.7, mb: 1 }}
                      >
                        {cert.issuer} – {cert.issueDate}
                      </Typography>
                      <Box display="flex" justifyContent="center" gap={1} flexWrap="wrap">
                        {cert.tags.map((tag, k) => (
                          <Chip key={k} label={tag} size="small" color="secondary" variant="outlined" />
                        ))}
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </SlideInSection>
          </Grid>
        </Grid>

      </Container>

      {/* CERT MODAL */}
      <Dialog open={!!openCert} onClose={() => setOpenCert(null)} maxWidth="sm" fullWidth>
        {openCert && (
          <DialogContent sx={{ textAlign: 'center', p: 4 }}>
            <img src={openCert.logo} alt={openCert.title} style={{ width: 100, marginBottom: 16 }} />
            <Typography variant="h6">{openCert.title}</Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              {openCert.issuer}
            </Typography>
            <Typography variant="body2" mt={1}>
              Issued {openCert.issueDate}
            </Typography>
            <Box mt={1} display="flex" justifyContent="center" gap={1} flexWrap="wrap">
              {openCert.tags.map((t, i) => (
                <Chip key={i} label={t} size="small" color="primary" />
              ))}
            </Box>
            <Button
              variant="contained"
              color="secondary"
              href={openCert.link}
              target="_blank"
              sx={{ mt: 2 }}
            >
              View Credential
            </Button>
          </DialogContent>
        )}
      </Dialog>
    </Box>
  );
}

export default First;
