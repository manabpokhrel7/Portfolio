import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InputWithIcon from './Contact';
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

export default function ColumnsGrid() {
  return (
    <Container>
      <Grid container spacing={3}>
        {/* Single Column (Full Width on All Screens) */}
        <Grid item xs={12}>
          <Item elevation={3}>
            <BasicCard />
          </Item>
          <Item sx={{ marginTop: 3 }} elevation={3}>
            <InputWithIcon />
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}
