import React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import './Contact.css';

function ContactForm() {
  const inputStyle = {
    height: '100%',
  };

  return (
    <div className='foot'>
      <form
        action="https://formspree.io/f/maygkdzr" // Replace with your Formspree endpoint
        method="POST"
      >
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <FormControl variant="standard">
            <InputLabel htmlFor="first-name">
              First Name
            </InputLabel>
            <Input
              id="first-name"
              name="message" // Field name for first name
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
              style={inputStyle}
            />
          </FormControl>
          <TextField
            id="last-name"
            name="message" // Field name for last name
            label="Last Name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="standard"
            style={inputStyle}
          />
          <TextField
            id="email"
            type="email"
            name="_replyto" // This is required by Formspree
            label="Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
            style={inputStyle}
          />
          <TextareaAutosize
            id="message"
            aria-label="message"
            name="message" // Field name for the message
            placeholder="Your message here"
            style={inputStyle}
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default ContactForm;
