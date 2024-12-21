import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Info.css';
import BasicStack from './Achievement';
import './Info.css';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} className="Box">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Introduction" {...a11yProps(0)} />
          <Tab label="Hobbies" {...a11yProps(1)} />
          <Tab label="Academic" {...a11yProps(2)} />
          <Tab label="WorkExperience" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} style={{ width: '100%' }}>
    My Name is Manab Pokhrel. 
    I am a passionate and dedicated Web Developer with expertise in WordPress, ReactJS, and modern DevOps tools like Docker, Kubernetes, Terraform, and Ansible. With over a year of professional experience, I specialize in creating responsive, user-friendly websites and optimizing performance to meet client needs. My strong foundation in web development, combined with certifications like AWS Solutions Architect, reflects my commitment to continuous learning and innovation. I thrive in collaborative environments and enjoy solving challenges that enhance user experiences and drive business success. Explore my portfolio to see how I turn ideas into impactful digital solutions!
</CustomTabPanel>
<CustomTabPanel value={value} index={2} style={{ width: '100%' }}>
    I have completed my bachelors in Computer Science in Nepal.
</CustomTabPanel>
<CustomTabPanel value={value} index={3} style={{ width: '100%' }}>
    <BasicStack />
</CustomTabPanel>

    </Box>
  );
}
