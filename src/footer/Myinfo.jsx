import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const cardStyle = {
  minWidth: 275,
};

const linkStyle = {
  textDecoration: 'none', // Remove underline
  color: '#4285F4', // Inherit the color from the parent element
};

export default function BasicCard() {
  const email = 'manabpokhrel7@gmail.com';
  const phone = '+977-98********';

  return (
    <Card sx={cardStyle}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          ContactME
        </Typography>
        <Typography variant="h5" component="div">
          <PhoneIcon style={{ marginRight: '5px' }} />
          <a href={`tel:${phone}`} style={linkStyle}>{phone}</a>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Kathmandu
        </Typography>
        <Typography variant="body2">
          <EmailIcon style={{ marginRight: '5px' }} />
          <a href={`mailto:${email}`} style={linkStyle}>{email}</a>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Social Media</Button>
      </CardActions>
    </Card>
  );
}
