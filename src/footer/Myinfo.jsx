import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import Box from '@mui/material/Box';
import './Contact.css';
import BasicMenu from './Social';

const linkStyle = {
  textDecoration: 'none',
  color: '#4285F4',
};

export default function BasicCard() {
  const email = 'manabpokhrel7@gmail.com';

  return (
    <Box
      sx={{
        backgroundImage: 'url("card.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
        minHeight: '300px', // Ensures enough space for vertical centering
      }}
    >
      <Card sx={{ minWidth: 275, width: '100%', maxWidth: 400, boxShadow: 6 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            ContactME
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            TORONTO, CANADA
          </Typography>
          <Typography variant="body2">
            <EmailIcon style={{ marginRight: '5px' }} />
            <a href={`mailto:${email}`} style={linkStyle}>
              {email}
            </a>
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <BasicMenu />
        </CardActions>
      </Card>
    </Box>
  );
}
