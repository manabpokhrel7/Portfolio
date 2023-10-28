import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Info.css';
import BasicStack from './Achievement';

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
      <CustomTabPanel value={value} index={0}>
        My Name is Manab Pokhrel. 
        As a recent IT graduate who specialized in frontend web development and honed my skills in Photoshop, I'm passionate about the digital world and the power of creativity.

In the realm of technology, I'm known for my proficiency in crafting visually stunning and user-friendly websites, where I strike a harmonious balance between design and functionality. Web development isn't just a profession for me; it's a canvas for my creativity.

</CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      I've trained in boxing, where discipline, agility, and strength are the key to success. On the football field, I find joy in both playing and being an ardent fan of the beautiful game.

But my interests don't stop there. I'm also a musical soul, wielding a guitar with finesse. Music allows me to express my creativity in yet another form, proving that my talents extend beyond the tech world.
      
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        I have completed my bachelors in Computer Science in Nepal. 
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
         <BasicStack />
      </CustomTabPanel>
    </Box>
  );
}
