import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#D70040' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));

export default function FlexboxGapStack() {
  return (
    <Box
      sx={{
        marginBottom: '5%!important',
        width: 200,
        display: 'flex',
        justifyContent: 'center!important',
        alignItems: 'center',
        margin: 'auto',
      }}
    >
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
        <Item>ABOUT</Item>
        <Item>ME</Item>
      </Stack>
    </Box>
  );
}
