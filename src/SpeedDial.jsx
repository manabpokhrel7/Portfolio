import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

const BasicSpeedDial = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add an event listener to detect window resize
    window.addEventListener('resize', handleWindowResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return isMobile ? (
    <Box
      sx={{
        position: 'absolute',
        bottom: '16px',
        right: '16px',
        zIndex: 9999999999999999999,
      }}
    >
      <SpeedDial ariaLabel="SpeedDial basic example" icon={<SpeedDialIcon />}>
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  ) : null;
};

export default BasicSpeedDial;
