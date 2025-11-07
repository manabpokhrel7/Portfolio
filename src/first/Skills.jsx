// Skills.jsx
import * as React from 'react';
import {
  Box,
  Stepper,
  Step,
  StepButton,
  Paper,
  Grid,
  Tooltip,
  Grow,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import CloudIcon from '@mui/icons-material/Cloud';
import TerminalIcon from '@mui/icons-material/Terminal';
import './Skills.css';

// 🧱 Reusable card
const SkillCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  fontWeight: 600,
  fontSize: '1.05rem',
  borderRadius: 18,
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, #1e293b, #0f172a)'
    : 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
  color: theme.palette.text.primary,
  boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  '&:hover': {
    transform: 'translateY(-5px) scale(1.05)',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
  },
}));

const steps = ['DevOps', 'Cloud', 'System Admin'];

// 🧠 Organized Skill Data
const skillsData = {
  DevOps: [
    { name: '🔁 CI/CD', tip: 'Pipeline Automation' },
    { name: '☸️ Kubernetes', tip: 'Container Orchestration' },
    { name: '🐳 Docker', tip: 'Container Runtime' },
    { name: '📦 Podman', tip: 'Red Hat’s Container Tool' },
    { name: '🚀 ArgoCD', tip: 'GitOps Continuous Delivery' },
    { name: '🔧 Helm Charts', tip: 'Kubernetes Templating' },
    { name: '⚙️ Terraform', tip: 'Infrastructure as Code' },
    { name: '🧩 Ansible', tip: 'Configuration Management' },
    { name: '📡 Prometheus', tip: 'Monitoring & Metrics' },
  ],
  Cloud: [
    { name: '☁️ AWS', tip: 'Amazon Web Services' },
    { name: '🔷 Azure', tip: 'Microsoft Azure Cloud' },
    { name: '🌐 GCP', tip: 'Google Cloud Platform' },
  ],
  'System Admin': [
    { name: '🐧 Linux', tip: 'System Administration' },
    { name: '🪟 Windows Server', tip: 'Active Directory, IIS, DNS' },
  ],
};

export default function SkillsSection() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const selectedCategory = steps[activeStep];
  const skills = skillsData[selectedCategory] || [];

  const handleStep = (index) => () => setActiveStep(index);

  return (
    <Box
      sx={{
        width: '100%',
        textAlign: 'center',
        py: 8,
        backgroundColor: theme.palette.background.default,
      }}
    >

      {/* Stepper */}
      <Box sx={{ width: '100%', maxWidth: 720, mx: 'auto', mb: 5 }}>
        <Stepper
          nonLinear
          activeStep={activeStep}
          alternativeLabel
          sx={{
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton
                color="inherit"
                onClick={handleStep(index)}
                icon={
                  index === 0 ? (
                    <DeveloperModeIcon
                      fontSize="large"
                      color={activeStep === index ? 'primary' : 'inherit'}
                    />
                  ) : index === 1 ? (
                    <CloudIcon
                      fontSize="large"
                      color={activeStep === index ? 'primary' : 'inherit'}
                    />
                  ) : (
                    <TerminalIcon
                      fontSize="large"
                      color={activeStep === index ? 'primary' : 'inherit'}
                    />
                  )
                }
              >
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* Dynamic Skill Grid */}
      <Grow in={true} timeout={700}>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          {selectedCategory === 'DevOps' && (
            <Grid
              container
              spacing={3}
              justifyContent="center"
              sx={{ maxWidth: 800, mx: 'auto', px: 2 }}
            >
              {skills.map((skill, i) => (
                <Grid item xs={6} sm={4} key={i}>
                  <Tooltip title={skill.tip} arrow>
                    <SkillCard>{skill.name}</SkillCard>
                  </Tooltip>
                </Grid>
              ))}
            </Grid>
          )}

          {selectedCategory === 'Cloud' && (
            <Grid
              container
              spacing={3}
              justifyContent="center"
              sx={{ maxWidth: 600, mx: 'auto', px: 2 }}
            >
              {/* First Row (2 items) */}
              {skills.slice(0, 2).map((skill, i) => (
                <Grid item xs={6} sm={6} key={i}>
                  <Tooltip title={skill.tip} arrow>
                    <SkillCard>{skill.name}</SkillCard>
                  </Tooltip>
                </Grid>
              ))}
              {/* Second Row (1 centered) */}
              <Grid item xs={12} sm={6}>
                <Tooltip title={skills[2].tip} arrow>
                  <SkillCard sx={{ mx: 'auto' }}>{skills[2].name}</SkillCard>
                </Tooltip>
              </Grid>
            </Grid>
          )}

          {selectedCategory === 'System Admin' && (
            <Grid
              container
              spacing={3}
              justifyContent="center"
              sx={{ maxWidth: 500, mx: 'auto', px: 2 }}
            >
              {skills.map((skill, i) => (
                <Grid item xs={6} sm={6} key={i}>
                  <Tooltip title={skill.tip} arrow>
                    <SkillCard>{skill.name}</SkillCard>
                  </Tooltip>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Grow>
    </Box>
  );
}
