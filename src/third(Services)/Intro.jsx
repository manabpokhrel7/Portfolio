import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));

export default function FlexboxGapStack() {
  const isMobile = window.innerWidth <= 600; // Define a breakpoint for mobile devices

  const itemStyles = {
    marginTop: isMobile ? '15%' : '', // Set mobile background color
    marginBottom: isMobile ? '40%' : '', // Set mobile padding
     // Set mobile font size
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
        <Item style={itemStyles}>SERVICES I PROVIDE</Item>
      </Stack>
    </Box>
  );
}
