import React from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';

// Sample tab content (can be from an API later)
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
      <Box sx={{ padding: 2, minHeight: '100px' }}>
        <Typography variant="body1" color="text.primary">
          {tabData[value].content}
        </Typography>
      </Box>
    </Box>
  );
};

export default DynamicTabPanel;
