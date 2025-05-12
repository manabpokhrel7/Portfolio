import React from 'react';
import { Tabs, Tab, Box, Typography, useTheme } from '@mui/material';

const tabData = [
  {
    label: 'Experience',
    content: 'Over 3 years of experience in DevOps and Cloud engineering, working on CI/CD pipelines, containerization, and infrastructure automation.'
  },
  {
    label: 'Education',
    content: 'Master of Research (MRes) in Business & Technology. Background in Computer Science and International Trade.'
  },
  {
    label: 'Certifications',
    content: 'AWS Certified Solutions Architect, Docker Certified Associate, and Kubernetes Administrator (CKA).'
  },
];

const DynamicTabPanel = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        variant="fullWidth"
        centered
        sx={{ marginBottom: 2 }}
      >
        {tabData.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>
      <Box
        sx={{
          padding: 3,
          borderRadius: 2,
          backgroundColor: theme.palette.mode === 'dark'
            ? theme.palette.background.paper
            : '#f0f0f0',
          transition: 'background-color 0.3s ease',
        }}
      >
        <Typography variant="body1">
          {tabData[value].content}
        </Typography>
      </Box>
    </Box>
  );
};

export default DynamicTabPanel;
