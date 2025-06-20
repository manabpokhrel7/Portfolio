// TabPanel.js
import React from 'react';
import { Tabs, Tab, Box, Typography, useTheme, Paper, useMediaQuery } from '@mui/material';

const tabData = [
  {
    label: 'Experience',
    content: `Over 1 year of hands-on experience as a DevOps Engineer, focusing on CI/CD automation, containerized deployments, and cloud infrastructure using tools like Kubernetes, Helm, Argo CD, Docker, Terraform, and Ansible. Experienced with both AWS and Azure environments, and skilled in Linux system administration and GitOps practices.`,
  },
  {
    label: 'Education',
    content: `Postgraduate Certificate in DevOps for Cloud Computing (Lambton College, Toronto, Jan 2024 – Dec 2025)\nBachelor of Science in Computer Science and IT (Trinity International College, Nepal, 2018 – 2023)`,
  },

];

const DynamicTabPanel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 600,
        mx: 'auto',
        px: isMobile ? 1 : 0,
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        variant={isMobile ? 'scrollable' : 'fullWidth'}
        scrollButtons={isMobile ? 'auto' : false}
        centered={!isMobile}
        sx={{ mb: 2 }}
      >
        {tabData.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>

      <Paper
        elevation={3}
        sx={{
          p: isMobile ? 2 : 3,
          borderRadius: 2,
          backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#fdfdfd',
          transition: 'background-color 0.3s ease',
        }}
      >
        <Typography variant="body1" sx={{ whiteSpace: 'pre-line', fontSize: isMobile ? '0.95rem' : '1rem' }}>
          {tabData[value].content}
        </Typography>
      </Paper>
    </Box>
  );
};


export default DynamicTabPanel;