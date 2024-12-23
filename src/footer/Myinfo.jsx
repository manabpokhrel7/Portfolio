import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import Box from '@mui/material/Box';
import './Contact.css';
import BasicMenu from './Social';

const cardStyle = {
  minWidth: 275,
};

const linkStyle = {
  textDecoration: 'none', // Remove underline
  color: '#4285F4', // Inherit the color from the parent element
};

const boxStyle = {
  backgroundImage: 'url("card.jpeg")', // Use the file name directly
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white', // Text color on top of the background image
};

export default function BasicCard() {
  const email = 'manabpokhrel7@gmail.com';

  return (
    <Box sx={boxStyle}>
      <Card sx={cardStyle}>
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
        <CardActions>
          <BasicMenu />
        </CardActions>
      </Card>
    </Box>
  );
}
