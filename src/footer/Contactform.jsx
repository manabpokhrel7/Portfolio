import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputWithIcon from './Contact';
import BasicCard from './Myinfo';

const Container = styled(Box)(({ theme }) => ({
  maxWidth: '90%',
  margin: '0 auto',
  padding: theme.spacing(4, -1), // vertical padding
}));

export default function ColumnsGrid() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <BasicCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputWithIcon />
        </Grid>
      </Grid>
    </Container>
  );
}
