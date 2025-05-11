import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InputWithIcon from './Contact';
import ContactImage from './contact.avif';
import BasicCard from './Myinfo';

const Container = styled(Box)(({ theme }) => ({
  maxWidth: '90%',
  margin: '0 auto',
  padding: theme.spacing(4, 0), // vertical padding
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Image = styled('img')({
  width: '100%',
  height: '495px',
  objectFit: 'cover',
  borderRadius: '4px',
});

export default function ColumnsGrid() {
  return (
    <Container>
      <Grid container spacing={3}>
        {/* Left Column */}
        <Grid item xs={12} sm={6}>
          <Item elevation={3}>
            <BasicCard />
          </Item>
          <Item sx={{ marginTop: 3 }} elevation={3}>
            <InputWithIcon />
          </Item>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} sm={6}>
          <Item
            elevation={3}
            sx={{
              '@media (max-width: 600px)': {
                display: 'none',
              },
            }}
          >
            <Image src={ContactImage} alt="Person reaching out via contact form illustration" />
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}
