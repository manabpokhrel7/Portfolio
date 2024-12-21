import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicStack() {
  const openImageInNewTab = (imageUrl) => {
    // Open the image in a new tab
    window.open(imageUrl, '_blank');
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Item>Education: I have completed my bachelors in Computer Science in Nepal</Item>
        <Item>
          2020-2022: Worked as a WordPress web developer
          <Button onClick={() => openImageInNewTab('https://photos.app.goo.gl/s1J82A6pm4UfXwMv9')}>Show</Button>
        </Item>
        <Item>2022-2023: Worked as a Intern at Vortex IT Solutions</Item>
        <Item>AWS Certified Solutions Architect <Button onClick={() => openImageInNewTab('https://www.credly.com/badges/c2725ab4-5508-43b3-afd6-8328caa90d0c/linked_in_profile')}>Show</Button></Item>
      </Stack>
    </Box>
  );
}
