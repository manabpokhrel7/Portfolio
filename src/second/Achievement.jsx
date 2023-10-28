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
        <Item>
          2020-2022: Worked as a WordPress web developer
          <Button onClick={() => openImageInNewTab('https://lh3.googleusercontent.com/pw/ADCreHfNef5wtGcQwN5Qbud99MfbN5k71B0MFnbzJQnQ_k6IL2TGjZ-Y-yTnZnQ_Ez9Tr6n6M7jqaJb_-puSzx0ELE6CkdH30DXhOCIHrSspo_gADoAfG6xUJKxkLjktxdVCD4e7YzwENGH_YIdDKsOZZSiAvRkQJmnytm-V3dp9FW6sU4YwyvZ39qx-Ab2Eb_0OgnKPJjEFp_75aJyPzJ9LLrwUBkcU3bieCDI4-sbFeXMN9omY09ew231KgVBmjbgSeDkFvUuIhviw6H7Bt9oJE1n4R4DxMyy_O7fRncULtQ3eIMdsqL11N2UVAFLRsNQ1Fr-kKR0GqtTpanU0cO8hN_-aAnDTzQ8SgOyJJF0NfMlzY5Fi9DjR581bNuSerE_kkLuH0pdUDxIFPR0lBNS07KWU9fRxnJmdkzh3iWMCkMl862_BoGT2MfZaJDlKrEGRDbcvu7GmcYtzEFqMmB50E6OFnLcAcoPzI2geFDti2TLpdhrfpj8FQ-Rkp3eH4CFxFj5N2xY2MSEsaO71PKEBGE-2FK7gb-Wi8Y9v8WbrzDEnmc4h5POSPPxl2Y0qyGzvXBz0KaVF57rQl1UZ0teQG6DxrwastQLJ-v7yeydKGKZ8ZSnuhr7vJKvzIQW29ZvVOUEVHZ6sjO7VVHpmKKSb3pmDdsDQ0WNH1Ps_Ue6F3bO3xAnj677z637ohgY9sb5UvAWUP7eC1-ayYEQ6a4M20Ghv2duorv8P2YrJj7U5-tkseUaBlCS2pSvROzvz_FMnXHV9Wu8wQmvC-G9tXl6ZENyhVyvYc7MTLg5j6zWJn9twMOaghAxUR33h1DGnJOyG8cZsMXdwZj_1Wdtdq0GKIUL6J06xqO1cjvM-gbMEZCWzXf2KWb5yVQjRKyrqDIjP7XnCYYkQeu9AhXZUAgj0JJaWv3c=w464-h619-s-no-gm?authuser=0')}>Show</Button>
        </Item>
        <Item>2022-2023: Worked as a Intern at Vortex IT Solutions</Item>
        <Item>Current: Freelancer</Item>
      </Stack>
    </Box>
  );
}
