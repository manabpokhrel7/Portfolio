import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import CloudIcon from '@mui/icons-material/Cloud';
import TerminalIcon from '@mui/icons-material/Terminal';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Grow from '@mui/material/Grow';
import './Skills.css'; // You can still use this for custom CSS

// Styled Paper component for consistent skill item display
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// Steps shown in the stepper
const steps = ['DevOps', 'Cloud Services', 'SystemAdmin'];

// Messages for each step including icons & tooltips
const stepMessages = [
  <Grow in={true} timeout={500}>
    <Stack spacing={2}>
      <Tooltip title="CI/CD pipelines and automation tools" arrow>
        <Item>🔁 CICD</Item>
      </Tooltip>
      <Tooltip title="Container orchestration with Kubernetes" arrow>
        <Item>☸️ Kubernetes</Item>
      </Tooltip>
      <Tooltip title="Build, ship, and run containers" arrow>
        <Item>🐳 Docker</Item>
      </Tooltip>
      <Tooltip title="Red Hat’s alternative to Docker" arrow>
        <Item>📦 Podman</Item>
      </Tooltip>
      <Tooltip title="GitOps deployment tool" arrow>
        <Item>🚀 ArgoCD</Item>
      </Tooltip>
      <Tooltip title="Templating Kubernetes configs" arrow>
        <Item>🔧 Helm Charts</Item>
      </Tooltip>
    </Stack>
  </Grow>,

  <Grow in={true} timeout={500}>
    <Stack spacing={2}>
      <Tooltip title="Amazon Web Services" arrow>
        <Item>☁️ AWS</Item>
      </Tooltip>
      <Tooltip title="Google Cloud Platform" arrow>
        <Item>🌐 GCP</Item>
      </Tooltip>
      <Tooltip title="Microsoft Azure cloud services" arrow>
        <Item>🔷 Azure</Item>
      </Tooltip>
    </Stack>
  </Grow>,

  <Grow in={true} timeout={500}>
    <Stack spacing={2}>
      <Tooltip title="Linux system administration" arrow>
        <Item>🐧 Linux</Item>
      </Tooltip>
      <Tooltip title="Windows Server administration" arrow>
        <Item>🪟 Windows</Item>
      </Tooltip>
    </Stack>
  </Grow>
];

// Center styles for layout
const centerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const mobileCentered = {
  width: '100%',
  margin: 'auto',
};

// Main component
export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => steps.length;
  const completedSteps = () => Object.keys(completed).length;
  const allStepsCompleted = () => completedSteps() === totalSteps();

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box
      sx={{
        ...centerStyle,
        ...(window.innerWidth < 600 ? mobileCentered : null),
      }}
    >
      <Box sx={{ width: '90%', maxWidth: '600px', marginTop: '5%' }}>
        {/* Stepper with icons */}
        <Stepper nonLinear activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step
              key={label}
              completed={completed[index]}
              sx={{
                '@media (max-width: 600px)': {
                  position: 'relative',
                  right: '15%',
                },
              }}
            >
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

        {/* Step content display */}
        <Box sx={{ mt: 3 }}>
          {allStepsCompleted() ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed — you're finished!
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <Typography component="div" sx={{ mt: 2, mb: 1, py: 1 }}>
              {stepMessages[activeStep]}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}
