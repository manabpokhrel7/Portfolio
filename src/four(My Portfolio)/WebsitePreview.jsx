import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  Modal,
  Typography,
  Button,
  Chip,
  Fade,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

import project1 from '../Images/project1.png';
import terakube from '../Images/terakube.png';
import img from '../Images/img.png';
import project2 from '../Images/project2.png';

// Use remote URLs directly
const eksProjectImage = 'https://amlanscloud.com/static/0428f8b7413d84492d43565c788c203b/af144/main.png';
const ecsTerraformImage = 'https://external-preview.redd.it/getting-started-with-ecs-can-be-overwhelming-it-involves-v0-8RKLRhNqqFoIfOCAZeMIMFqJdHasrsCzjHCkyFQ_Ug4.jpg?auto=webp&s=5ebc93a1bb196ae308164ef0ae3250de26a12fe5';

// ✅ Project data
const projects = [
  {
    title: 'Terraform + Ansible EC2 Self-Hosted GitLab Runner',
    image: project1,
    description:
      'A fully automated setup of a self-hosted GitLab runner on AWS EC2 using Terraform and Ansible.',
    link: 'https://gitlab.com/manabpokhrel7/terraform-ansible-ec2-selfhostedrunner',
    tags: ['Terraform', 'Ansible', 'AWS', 'DevOps'],
  },
  {
    title: 'Flask + Redis + DB on EKS via GitLab Pipeline',
    image: terakube,
    description:
      'Production-grade deployment of a multi-container Python Flask app using Kubernetes on AWS EKS, orchestrated with GitLab CI/CD and provisioned using Terraform.',
    link: 'https://gitlab.com/manabpokhrel7/flask-redis-db-aks-pipeline',
    tags: ['Flask', 'Redis', 'Kubernetes', 'Terraform', 'CI/CD'],
  },
  {
    title: 'Helm Deployment: WordPress + MySQL + Monitoring',
    image: img,
    description:
      'Deploys a WordPress app with a MySQL backend on a Kubernetes cluster using Helm. Includes Prometheus and Grafana monitoring.',
    link: 'https://gitlab.com/manabpokhrel7/helm-wp-mysql',
    tags: ['Helm', 'WordPress', 'MySQL', 'Prometheus', 'Grafana'],
  },
  {
    title: 'Helm + ArgoCD: Python, Redis, DB Deployment',
    image: project2,
    description:
      'Developing project deploying a Python app with Redis and DB using Helm and GitOps via ArgoCD.',
    link: 'https://gitlab.com/manabpokhrel7/myapp-helm',
    tags: ['ArgoCD', 'Helm', 'GitOps', 'Python', 'Redis'],
  },
  {
    title: 'Terraform + Ansible: EKS + Self-Hosted Runner + CI/CD',
    image: eksProjectImage,
    description:
      'End-to-end project deploying an EKS cluster with Terraform and Ansible, setting up a self-hosted GitLab runner, and CI/CD deployment using ArgoCD.',
    link: 'https://gitlab.com/manabpokhrel7/eks-with-testing',
    tags: ['Terraform', 'Ansible', 'EKS', 'CI/CD', 'ArgoCD', 'DevOps'],
  },
  {
    title: 'AWS ECS with Terraform: Flask + Redis + PostgreSQL',
    image: ecsTerraformImage,
    description:
      'Deploy a multi-container Flask app with Redis and PostgreSQL on AWS ECS using Terraform. Includes ALB, Cloud Map, security groups, and CloudWatch logging.',
    link: 'https://gitlab.com/manabpokhrel7/aws-ecs-with-terraform',
    tags: ['Flask', 'Redis', 'PostgreSQL', 'ECS', 'Terraform', 'AWS', 'DevOps'],
  },
  {
  title: 'Multi-Cloud GitLab Runners (AWS | Azure | GCP)',
  image: 'https://miro.medium.com/v2/resize:fit:580/1*v8XiToFK-pdj779PC_WHuQ.png',
  description:
    'Fully automated setup to deploy and test self-hosted GitLab runners across AWS, Azure, and GCP using Terraform, Ansible, and GitLab CI/CD. Each runner is tagged and verified in parallel pipelines.',
  link: 'https://gitlab.com/manabpokhrel7/gcp-selfhosted-runner-terraform',
  tags: [
    'Terraform',
    'Ansible',
    'GitLabCI',
    'MultiCloud',
    'AWS',
    'Azure',
    'GCP',
    'InfrastructureAsCode',
    'DevOps',
  ],
}

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

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* ✅ 3-column grid, scrolling vertically */}
      <Grid container spacing={3} justifyContent="center" sx={{ mt: 2 }}>
        {projects.map((project, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4} // 3 columns on medium+ screens
            key={index}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <ZoomCard
              onClick={() => handleOpen(project)}
              elevation={4}
              sx={{ width: '100%', maxWidth: 350 }}
            >
              <CardActionArea>
                <Box
                  sx={{
                    height: 200,
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              </CardActionArea>
            </ZoomCard>
          </Grid>
        ))}
      </Grid>

      {/* ✅ Modal for project details */}
      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Fade in={open}>
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
              outline: 'none',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
          >
            {activeProject && (
              <>
                <IconButton
                  onClick={handleClose}
                  sx={{ position: 'absolute', top: 8, right: 8 }}
                >
                  <CloseIcon />
                </IconButton>

                <Typography variant="h6" gutterBottom>
                  {activeProject.title}
                </Typography>

                <Box
                  component="img"
                  src={activeProject.image}
                  alt={activeProject.title}
                  sx={{
                    height: 250,
                    width: '100%',
                    objectFit: 'cover',
                    borderRadius: 2,
                    mb: 2,
                  }}
                />

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {activeProject.tags.map((tag, idx) => (
                    <Chip key={idx} label={tag} color="primary" size="small" />
                  ))}
                </Box>

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
                  View Full Project on GitLab
                </Button>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
