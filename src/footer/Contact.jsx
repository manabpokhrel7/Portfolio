import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("maygkdzr");
  if (state.succeeded) {
      return <p>Thank You!</p>;
  }
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
      <form onSubmit={handleSubmit}>
       <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Item>REACH OUT TO ME💎</Item><br></br>
      </Stack>
    </Box>
      <input
      placeholder="Your Email"
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      /><br></br><br></br>
      
      <textarea
      placeholder="Write your message"
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      /><br></br><br></br>
      <Button variant="outlined" type="submit" disabled={state.submitting}>
        Submit
      </Button>
    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;