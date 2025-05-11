import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Alert,
  CircularProgress
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled Paper for header text
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body1,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));

export default function ContactForm() {
  const [state, handleSubmit] = useForm("maygkdzr");

  // Display success message
  if (state.succeeded) {
    return (
      <Box sx={{ maxWidth: 500, mx: 'auto', mt: 4, px: 2 }}>
        <Alert severity="success">Thank you! Your message has been sent.</Alert>
      </Box>
    );
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 500,
        mx: 'auto',
        mt: 4,
        px: 2,
        pb: 6,
      }}
    >
      <Stack spacing={3}>
        <Item>REACH OUT TO ME</Item>

        <TextField
          label="Your Email"
          variant="standard"
          placeholder="Enter your email"
          id="email"
          type="email"
          name="email"
          fullWidth
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <TextField
          id="message"
          name="message"
          label="Leave a message"
          placeholder="Write your message here"
          multiline
          rows={4}
          fullWidth
          required
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="outlined"
            type="submit"
            disabled={state.submitting}
            sx={{ minWidth: 120 }}
          >
            {state.submitting ? (
              <CircularProgress size={20} sx={{ mr: 1 }} />
            ) : null}
            {state.submitting ? "Sending..." : "Submit"}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
