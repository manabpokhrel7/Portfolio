import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Modal,
  Typography,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// ✅ Sample project data
const projects = [
  {
    title: 'GitLab CI/CD',
    image: '/gitlab.png',
    description: 'A GitLab CI/CD pipeline to deploy Dockerized applications on AWS.',
    link: 'https://gitlab.com/users/manabpokhrel7/projects',
  },
  {
    title: 'GitHub Portfolio',
    image: '/git.jpg',
    description: 'My open-source React components and utilities hosted on GitHub.',
    link: 'https://github.com/manabpokhrel7?tab=repositories',
  },
  {
    title: 'Terraform Runner',
    image: '/terraform.png',
    description: 'Custom GitLab Runner infrastructure using Terraform and ECS Fargate.',
    link: 'https://gitlab.com/users/manabpokhrel7/projects',
  },
  {
    title: 'Portfolio Website',
    image: '/portfolio.png',
    description: 'My animated portfolio built with React and Material UI.',
    link: 'https://github.com/manabpokhrel7?tab=repositories',
  },
];

// ✅ Styled card with zoom effect
const ZoomCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

export default function ProjectGallery() {
  const [open, setOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const handleOpen = (project) => {
    setActiveProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveProject(null);
  };

  return (
    <>
      {/* ✅ 4x4 Grid Layout */}
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ZoomCard onClick={() => handleOpen(project)} elevation={4}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{ aspectRatio: '1 / 1', objectFit: 'cover' }}
                />
              </CardActionArea>
            </ZoomCard>
          </Grid>
        ))}
      </Grid>

      {/* ✅ Modal on click */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: 320, sm: 500 },
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: 3,
            p: 3,
          }}
        >
          {activeProject && (
            <>
              <Typography variant="h6" gutterBottom>
                {activeProject.title}
              </Typography>
              <CardMedia
                component="img"
                image={activeProject.image}
                alt={activeProject.title}
                sx={{
                  height: 250,
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius: 2,
                  mb: 2,
                }}
              />
              <Typography variant="body1" sx={{ mb: 3 }}>
                {activeProject.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href={activeProject.link}
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
              >
                View Full Project
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
}
