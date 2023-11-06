import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
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

  const [state, handleSubmit] = useForm("https://formspree.io/f/maygkdzr"); // Replace with your Formspree endpoint

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div className='foot'>
      <form onSubmit={handleSubmit}>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <FormControl variant="standard">
            <InputLabel htmlFor="first-name">
              First Name
            </InputLabel>
            <Input
              id="first-name"
              name="first-name"
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
            name="last-name"
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
            name="email"
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
          /><br></br>
          <TextareaAutosize
            id="message"
            aria-label="message"
            name="message"
            placeholder="Your message here"
            style={inputStyle}
          /><br></br>
          <Button variant="contained" type="submit" disabled={state.submitting}>
            Submit
          </Button>
        </Box>
      </form>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
    </div>
  );
}

function App() {
  return <ContactForm />;
}

export default App;
