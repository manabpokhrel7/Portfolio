import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BasicStack from './Achievement';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '100%', overflow: 'hidden' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="About Me" {...a11yProps(0)} />
          {/* <Tab label="Hobbies" {...a11yProps(1)} /> */}
          <Tab label="Studies & Work" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        My Name is Manab Pokhrel. 
I am a passionate and dedicated Web Developer with expertise in WordPress, ReactJS, and modern DevOps tools like Docker, Kubernetes, Terraform, and Ansible. With over a year of professional experience, I specialize in creating responsive, user-friendly websites and optimizing performance to meet client needs. My strong foundation in web development, combined with certifications like AWS Solutions Architect, reflects my commitment to continuous learning and innovation. I thrive in collaborative environments and enjoy solving challenges that enhance user experiences and drive business success. Explore my portfolio to see how I turn ideas into impactful digital solutions!        </TabPanel>
        {/* <TabPanel value={value} index={1} dir={theme.direction}>
        I've trained in boxing, where discipline, agility, and strength are the key to success. On the football field, I find joy in both playing and being an ardent fan of the beautiful game.
        </TabPanel> */}
        <TabPanel value={value} index={1} dir={theme.direction}>
        <BasicStack />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
