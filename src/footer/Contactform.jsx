import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InputWithIcon from './Contact';
import ContactImage from './contact.avif'; // Import the image
import BasicCard from './Myinfo';

const Container = styled(Box)(({ theme }) => ({
  maxWidth: '90%',
  margin: '0 auto',
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Image = styled('img')({
  maxWidth: '100%',
  height: '495px', // Set a fixed height, adjust as needed
  maxHeight: '100%',
});

export default function ColumnsGrid() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Item>
            <BasicCard />
          </Item>
          <Item sx={{ marginTop: 3 }}>
            <InputWithIcon />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item>
            <Image src={ContactImage} alt="Contact" />
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}
