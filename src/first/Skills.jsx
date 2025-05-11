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
import './Skills.css';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const steps = ['DevOps', 'Cloud Services', 'Freelancer'];

// Define an array of messages corresponding to each step
const stepMessages = [
  <Stack spacing={2}><Item>CICD/Kubernetes/Docker/Podman/ArgoCD/HelmCharts</Item></Stack>,
  <Stack spacing={2}><Item>AWS/GCP/Azure</Item></Stack>,
  <Stack spacing={2}><Item>SySAdmin</Item></Stack>,
];

const centerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const mobileCentered = {
  width: '100%', // Full width on mobile
  margin: 'auto', // Center horizontally on mobile
};
export default function HorizontalNonLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
  
    const totalSteps = () => {
      return steps.length;
    };
  
    const completedSteps = () => {
      return Object.keys(completed).length;
    };
  
    const allStepsCompleted = () => {
      return completedSteps() === totalSteps();
    };
  
    const handleStep = (step) => () => {
      setActiveStep(step);
    };
  
    const handleReset = () => {
      setActiveStep(0);
      setCompleted({});
    };
  
    return (
      <Box sx={{
        ...centerStyle, // Apply common center styling
        ...(window.innerWidth < 600 ? mobileCentered : null), // Apply mobile styling when the width is less than 600px
      }}>
        <Box sx={{ width: '50%', marginTop: '5%' }}>
          <Stepper nonLinear activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]} sx={{ // Add styles specific to the steps
                // Define your mobile-specific styles here
                '@media (max-width: 600px)': {
                    position: 'relative',
                    right: '15%',
                },
              }}>
                <StepButton
                  color="inherit"
                  onClick={handleStep(index)}
                  icon={
                    index === 0 ? (
                      <DeveloperModeIcon fontSize="large" color={activeStep === index ? 'primary' : 'inherit'} />
                    ) : index === 1 ? (
                      <CloudIcon fontSize="large" color={activeStep === index ? 'primary' : 'inherit'} />
                    ) : index === 2 ? (
                      <TerminalIcon fontSize="large" color={activeStep === index ? 'primary' : 'inherit'} />
                    ) : null
                  }
                >
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <div>
            {allStepsCompleted() ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                  {stepMessages[activeStep]}
                </Typography>
              </React.Fragment>
            )}
          </div>
        </Box>
      </Box>
    );
  }
  