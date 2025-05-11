import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InfoIcon from '@mui/icons-material/Info';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ChatIcon from '@mui/icons-material/Chat';
import Paper from '@mui/material/Paper';
import First from './first/First';
import About from './second/About';
import Port from './four(My Portfolio)/Port';
import Contactform from './footer/Contactform';
import BlogMainPage from './Blog/Main';
import { Fade } from '@mui/material';

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  const renderContent = () => {
    switch (value) {
      case 0:
        return (
          <>
            <First />
            <About />
          </>
        );
      case 1:
        return <Port />;
      case 2:
        return <Contactform />;
      case 3:
        return <BlogMainPage />;
      default:
        return null;
    }
  };

  React.useEffect(() => {
    // Scroll to top on tab switch
    if (ref.current) {
      ref.current.ownerDocument.body.scrollTop = 0;
    }
  }, [value]);

  return (
    <Box sx={{ pb: 9 }} ref={ref}>
      <CssBaseline />

      {/* Animated content on change */}
      <Fade in timeout={300}>
        <div>{renderContent()}</div>
      </Fade>

      {/* Fixed bottom navbar */}
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="AboutME" icon={<InfoIcon />} />
          <BottomNavigationAction label="Projects" icon={<AccountTreeIcon />} />
          <BottomNavigationAction label="ContactME" icon={<ContactPageIcon />} />
          <BottomNavigationAction label="Blog" icon={<ChatIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
