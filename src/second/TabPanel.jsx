import React from 'react';
import { Tabs, Tab, Box, Typography, useTheme, Paper } from '@mui/material';

const tabData = [
  {
    label: 'Experience',
    content: `Over 1 year of hands-on experience as a DevOps Engineer, focusing on CI/CD automation, containerized deployments, and cloud infrastructure using tools like Kubernetes, Helm, Argo CD, Docker, Terraform, and Ansible. Experienced with both AWS and Azure environments, and skilled in Linux system administration and GitOps practices.`,
  },
  {
    label: 'Education',
    content: `Postgraduate Certificate in DevOps for Cloud Computing (Lambton College, Toronto, Jan 2024 – Dec 2025)\nBachelor of Science in Computer Science and IT (Trinity International College, Nepal, 2018 – 2023)`,
  },
  {
    label: 'Certifications',
    content: `AWS Certified Solutions Architect\nRHCSA (Course Completion)\n(Additional certifications in progress)`,
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
        sx={{ mb: 2 }}
      >
        {tabData.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>

      <Paper
        elevation={3}
        sx={{
          p: 3,
          borderRadius: 2,
          backgroundColor:
            theme.palette.mode === 'dark'
              ? theme.palette.background.paper
              : '#fdfdfd',
          transition: 'background-color 0.3s ease',
        }}
      >
        <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
          {tabData[value].content}
        </Typography>
      </Paper>
    </Box>
  );
};

export default DynamicTabPanel;
