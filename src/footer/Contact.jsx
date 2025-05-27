import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  Box,
  Button,
  Stack,
  TextField,
  Snackbar,
  Alert,
  Typography,
  CircularProgress
} from '@mui/material';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("maygkdzr");
  const [showSnackbar, setShowSnackbar] = useState(false);

  // When form submission succeeds
  if (state.succeeded) {
    return (
      <Box sx={{ maxWidth: 500, mx: 'auto', mt: 4, px: 2, textAlign: 'center' }}>
        <Snackbar
          open={!showSnackbar}
          autoHideDuration={6000}
          onClose={() => setShowSnackbar(true)}
        >
          <Alert severity="success" variant="filled" onClose={() => setShowSnackbar(true)}>
            Thank you! Your message has been sent.
          </Alert>
        </Snackbar>

        <Button
          variant="outlined"
          sx={{ mt: 3 }}
          onClick={() => window.location.reload()}
        >
          Send Another Message
        </Button>
      </Box>
    );
  }

  return (
    <Box
      component="form"
      aria-label="Contact form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 500,
        mx: 'auto',
        mt: 4,
        px: 2,
      }}
    >
      <Stack spacing={3}>
        <Typography variant="h6" align="center" gutterBottom>
          REACH OUT TO ME
        </Typography>

        <TextField
          label="Your Name"
          variant="standard"
          placeholder="Enter your name"
          id="name"
          name="name"
          fullWidth
          required
        />

        <TextField
          label="Your Email"
          variant="standard"
          placeholder="Enter your email"
          id="email"
          type="email"
          name="email"
          autoComplete="email"
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
            sx={{ minWidth: 140 }}
          >
            {state.submitting ? (
              <>
                <CircularProgress size={20} sx={{ mr: 1 }} />
                Sending...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
