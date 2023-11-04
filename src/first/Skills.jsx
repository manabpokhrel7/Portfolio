import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import WebIcon from '@mui/icons-material/Web';
import PhotoshopIcon from '@mui/icons-material/Photo';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Skills.css';

const steps = ['Building Websites', 'Photoshop', 'Freelancer'];

// Define an array of messages corresponding to each step
const stepMessages = [
  'I develop frontend webpages in ReactJS or Wordpress',
  'I also create and edit designs in Photoshop',
  'I am a freelancer who can take on smaller tasks as well',
];

const centerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const mobileCentered = {
  width: '100%', // Full width on mobile
  margin: '0 auto', // Center horizontally on mobile
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
            <Step key={label} completed={completed[index]}>
              <StepButton
                color="inherit"
                onClick={handleStep(index)}
                icon={
                  index === 0 ? (
                    <WebIcon fontSize="large" color={activeStep === index ? 'primary' : 'inherit'} />
                  ) : index === 1 ? (
                    <PhotoshopIcon fontSize="large" color={activeStep === index ? 'primary' : 'inherit'} />
                  ) : index === 2 ? (
                    <FacebookIcon fontSize="large" color={activeStep === index ? 'primary' : 'inherit'} />
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
